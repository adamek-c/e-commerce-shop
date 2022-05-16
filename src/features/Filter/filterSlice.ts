import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import books from "../../data/products";

interface Book {
	id: string;
	title: string;
	released?: string;
	edition?: string;
	author?: string;
	rated?: number;
	description: string;
	img: string;
	price: number;
	category?: string;
}

interface filterBooks {
	items: Book[];
}

const initialState: filterBooks = {
	items: books,
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {},
});

export default filterSlice.reducer;
