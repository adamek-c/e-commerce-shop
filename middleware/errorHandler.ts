import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	let message = err.message;
	if (err.code === 11000) message = handleDuplicateField(err);
	if (err.name === "ValidationError") message = handleValidationError(err);
	return res.status(400).json({
		success: false,
		message: message,
	});
};

const handleValidationError = (err: any) => {
	let message;
	const key = Object.keys(err.errors);
	message = `Invalid ${err.errors[key[0]].path}: ${err.errors[key[0]].value}.`;
	if (err.errors[key[0]] && err.errors[key[0]].properties) {
		message = err.errors[key[0]].properties.message;
	}
	return message;
};

const handleDuplicateField = (err: any) => {
	let message;
	const keys = Object.keys(err.keyValue);
	if (keys.includes("email")) message = "User already exists";
	return message;
};

export default errorHandler;
