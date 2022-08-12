import mongoose, { Schema } from "mongoose";

export interface User {
	name: string;
	lastName: string;
	email: string;
	password: string;
	data: {
		default: number;
	};
}

const UserSchema = new Schema<User>({
	name: {
		type: String,
		required: [true, "Please provide name"],
		trim: true,
		maxlength: 20,
	},
	lastName: {
		type: String,
		required: [true, "Please provide last name"],
		trim: true,
		maxlength: 20,
	},
	email: {
		type: String,
		required: [true, "Please provide email"],
		unique: true,
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			"Please provide valid email",
		],
	},
	password: {
		type: String,
		required: [true, "Please provide password"],
		minlength: [6, "Password should be at least six characters"],
		select: false,
	},
	data: {
		type: Date,
		default: Date.now,
	},
});

const userSchema = mongoose.model<User>("UserSchema", UserSchema);

export default userSchema;
