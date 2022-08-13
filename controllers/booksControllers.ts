import { Request, Response } from "express";
import asyncWrapper from "../middleware/asyncWrapper";
import booksSchema, { Books } from "../models/booksSchema";

const getAllBooks = asyncWrapper(async (req: Request, res: Response) => {
	const books = await booksSchema.find({});
	res.status(200).json({ message: "success", books });
});

const createBook = asyncWrapper(async (req: Request, res: Response) => {
	const {
		title,
		released,
		edition,
		author,
		rated,
		description,
		img,
		price,
		category,
	} = req.body;

	if (
		!title ||
		!released ||
		!edition ||
		!author ||
		!rated ||
		!description ||
		!img ||
		!price ||
		!category
	) {
		throw new Error("Please provide all values");
	}

	const book = (await booksSchema.create({
		title,
		released,
		edition,
		author,
		rated,
		description,
		img,
		price,
		category,
	})) as Books;

	res.status(200).json({ message: "create Book", book });
});

const getBook = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;
	const book = await booksSchema.findById({ _id: id });

	if (!book) {
		throw new Error(`Book with ${id} not exist`);
	}

	res.status(200).json({ message: "success", book });
});

const updateBook = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;

	const book = await booksSchema.findByIdAndUpdate({ _id: id }, req.body, {
		new: true,
		runValidators: true,
	});

	if (!book) {
		throw new Error(`Book with ${id} not exist`);
	}

	res.status(200).json({ message: "update Book", book });
});

const deleteBook = asyncWrapper(async (req: Request, res: Response) => {
	const { id } = req.params;

	const book = await booksSchema.findOneAndDelete({ _id: id });

	if (!book) {
		throw new Error(`Book with ${id} not exist`);
	}

	res.status(200).json({ message: "delete book", book });
});

export { getAllBooks, createBook, getBook, updateBook, deleteBook };
