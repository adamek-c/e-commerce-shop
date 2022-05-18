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
	all_items: Book[];
}

const initialState: filterBooks = {
	all_items: books,
	items: books,
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterCategory: (state, action: PayloadAction<string | undefined>) => {
			const category = state.all_items.filter(
				(book) => book.category === action.payload
			);
			state.items = category;
		},
		allBooks: (state) => {
			state.items = state.all_items;
		},
	},
});

export const { filterCategory, allBooks } = filterSlice.actions;

export default filterSlice.reducer;
