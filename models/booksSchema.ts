import mongoose, { Schema } from "mongoose";

export interface Books {
	title: string;
	released: string;
	edition: string;
	author: string;
	rated: number;
	description: string;
	img: string;
	price: number;
	category: string;
	cartCount: number;
	data: {
		default: number;
	};
}

const BooksSchema = new Schema<Books>({
	title: {
		type: String,
		required: [true, "Please provide title"],
		trim: true,
	},
	released: {
		type: String,
		required: [true, "Please provide released date"],
		trim: true,
	},
	edition: {
		type: String,
		required: [true, "Please provide edition"],
		trim: true,
	},
	author: {
		type: String,
		required: [true, "Please provide author"],
		trim: true,
	},
	rated: {
		type: Number,
		required: [true, "Please provide rated"],
		trim: true,
	},
	description: {
		type: String,
		required: [true, "Please provide description"],
		trim: true,
	},
	img: {
		data: Buffer,
		contentType: String,
	},
	price: {
		type: Number,
		required: [true, "Please provide price"],
	},
	category: {
		type: String,
		required: [true, "Please provide price"],
		trim: true,
	},
	cartCount: {
		type: Number,
		default: 0,
	},
	data: {
		type: Date,
		default: Date.now,
	},
});

const booksSchema = mongoose.model("BooksSchema", BooksSchema);

export default booksSchema;
