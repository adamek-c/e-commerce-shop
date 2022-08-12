import { Request, Response } from "express";
import userSchema, { User } from "../models/authenticationSchema";
import asyncWrapper from "../middleware/asyncWrapper";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET = process.env.JWT_SECRET as string;

const register = asyncWrapper(async (req: Request, res: Response) => {
	const { email, password, name, lastName, _id } = req.body;
	if (!email || !password || !name || !lastName) {
		throw new Error("Please provide email, password, name and last name");
	}

	if (password.length < 6) {
		throw new Error("Password should be at least six characters");
	}

	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);

	const user = (await userSchema.create({
		email,
		password: hashPassword,
		name,
		lastName,
	})) as User;

	const jwtToken = jwt.sign({ _id }, SECRET, {
		expiresIn: process.env.JWT_LIFETIME,
	});

	res.status(201).json({
		success: true,
		message: "Account created",
		user: {
			email: user.email,
			name: user.name,
			lastName: user.lastName,
		},
		jwtToken,
	});
});

const login = asyncWrapper(async (req: Request, res: Response) => {
	const { email, password, _id } = req.body;

	if (!email || !password) {
		throw new Error("Please provide email and password");
	}
	const user = await userSchema.findOne({ email }).select("+password");

	if (!user) {
		throw new Error("Invalid Credentials");
	}

	const hashedPassword = await bcrypt.compare(password, user.password);

	if (!hashedPassword) {
		throw new Error("Password is not correct. Please chcek your password");
	}

	const jwtToken = jwt.sign({ _id }, SECRET, {
		expiresIn: process.env.JWT_LIFETIME,
	});

	res.status(200).json({
		user: {
			email: user.email,
			name: user.name,
			lastName: user.lastName,
		},
		jwtToken,
	});
});

export { register, login };
