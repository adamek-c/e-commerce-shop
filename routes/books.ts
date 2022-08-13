import express from "express";
import {
	getAllBooks,
	createBook,
	getBook,
	updateBook,
	deleteBook,
} from "../controllers/booksControllers";

const routerBooks = express.Router();

routerBooks.route("/books").get(getAllBooks).post(createBook);
routerBooks
	.route("/books/:id")
	.get(getBook)
	.patch(updateBook)
	.delete(deleteBook);

export default routerBooks;
