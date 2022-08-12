"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const authenticationSchema_1 = __importDefault(require("../models/authenticationSchema"));
const asyncWrapper_1 = __importDefault(require("../middleware/asyncWrapper"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const SECRET = process.env.JWT_SECRET;
const register = (0, asyncWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name, lastName, _id } = req.body;
    if (!email || !password || !name || !lastName) {
        throw new Error("Please provide email, password, name and last name");
    }
    if (password.length < 6) {
        throw new Error("Password should be at least six characters");
    }
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashPassword = yield bcrypt_1.default.hash(password, salt);
    const user = (yield authenticationSchema_1.default.create({
        email,
        password: hashPassword,
        name,
        lastName,
    }));
    const jwtToken = jsonwebtoken_1.default.sign({ _id }, SECRET, {
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
}));
exports.register = register;
const login = (0, asyncWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, _id } = req.body;
    if (!email || !password) {
        throw new Error("Please provide email and password");
    }
    const user = yield authenticationSchema_1.default.findOne({ email }).select("+password");
    if (!user) {
        throw new Error("Invalid Credentials");
    }
    const hashedPassword = yield bcrypt_1.default.compare(password, user.password);
    if (!hashedPassword) {
        throw new Error("Password is not correct. Please chcek your password");
    }
    const jwtToken = jsonwebtoken_1.default.sign({ _id }, SECRET, {
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
}));
exports.login = login;
