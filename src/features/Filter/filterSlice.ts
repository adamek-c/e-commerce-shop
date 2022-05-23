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

interface Language {
	name?: string | undefined;
	checked?: boolean;
}

interface filterBooks {
	items: Book[];
	all_items: Book[];
	active: boolean;
	checked: boolean;
	bookName: string | undefined;
	bookLanguage: string | undefined;
}

const initialState: filterBooks = {
	all_items: books,
	items: books,
	active: false,
	checked: false,
	bookName: "",
	bookLanguage: "",
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterCategory: (state, action: PayloadAction<string | undefined>) => {
			if (state.checked && state.bookName) {
				state.bookName = action.payload;
				if (state.bookName === action.payload) {
					const booksLanguage = state.all_items.filter(
						(book) => book.edition === state.bookLanguage
					);
					state.items = booksLanguage.filter(
						(book) => book.category === state.bookName
					);
				}
			} else if (state.checked && !state.bookName) {
				const category = state.items.filter(
					(book) => book.category === action.payload
				);
				console.log("here");
				state.bookName = action.payload;
				state.items = category;
			} else {
				const category = state.all_items.filter(
					(book) => book.category === action.payload
				);
				state.bookName = action.payload;
				state.items = category;
			}
			state.active = true;
		},
		filterLanguage: (state, action: PayloadAction<Language>) => {
			if (!action.payload.checked && state.bookName) {
				state.items = state.all_items.filter(
					(book) => book.category === state.bookName
				);
			} else if (!action.payload.checked) {
				state.items = state.all_items;
			} else if (action.payload.checked && state.active) {
				const books = state.items.filter(
					(book) => book.edition === action.payload.name
				);
				state.bookLanguage = action.payload.name;
				state.checked = true;
				state.items = books;
			} else {
				const language = state.items.filter(
					(book) => book.edition === action.payload.name
				);
				console.log(action.payload.name);
				state.items = language;
				state.bookLanguage = action.payload.name;
				state.checked = true;
			}
		},
		allBooks: (state) => {
			state.items = state.all_items;
			state.bookName = "";
			state.active = false;
		},
		chcekedValue: (state) => {
			state.bookLanguage = "";
			state.checked = false;
		},
	},
});

export const { filterCategory, filterLanguage, allBooks, chcekedValue } =
	filterSlice.actions;

export default filterSlice.reducer;
