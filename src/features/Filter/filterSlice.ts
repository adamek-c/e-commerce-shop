import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import books from "../../data/products";
import {
	FilterBooks,
	Language,
	Price,
} from "../../interfaces/FiltrInterfaces/filtr";

const initialState: FilterBooks = {
	all_items: books,
	items: books,
	active: false,
	checked: false,
	bookName: "",
	bookLanguage: "",
	min_price: 0,
	max_price: 0,
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterCategory: (state, action: PayloadAction<string | undefined>) => {
			const books = state.all_items.filter(
				(book) => book.category === action.payload
			);
			state.items = books;
			state.bookName = action.payload;

			if (state.checked) {
				const books = state.items.filter(
					(book) => book.edition === state.bookLanguage
				);
				state.items = books;
			}
			if (state.max_price && state.min_price && state.bookName) {
				const booksPrices = state.items.filter((book) => {
					if (state.min_price <= book.price && book.price <= state.max_price) {
						return book;
					}
					// eslint-disable-next-line array-callback-return
					return;
				});
				state.items = booksPrices;
			}
		},
		filterLanguage: (state, action: PayloadAction<Language>) => {
			let tempFilter = state.all_items;

			if (action.payload.name && action.payload.checked) {
				const books = tempFilter.filter(
					(book) => book.edition === action.payload.name
				);
				state.checked = true;
				state.bookLanguage = action.payload.name;
				state.items = books;
			}
			if (!action.payload.checked) {
				state.items = tempFilter;
				state.checked = false;
				state.bookLanguage = "";
			}
			if (state.bookName && state.checked) {
				const books = state.items.filter(
					(book) => book.category === state.bookName
				);
				state.items = books;
			}
			if (state.bookName && !state.checked) {
				const books = state.items.filter(
					(book) => book.category === state.bookName
				);
				state.items = books;
			}
			if (
				state.checked &&
				state.bookLanguage &&
				!state.bookName &&
				!state.max_price &&
				state.min_price
			) {
				const booksPrices = state.items.filter((book) => {
					if (state.min_price <= book.price && book.price <= state.max_price) {
						return book;
					}
					// eslint-disable-next-line array-callback-return
					return;
				});
				state.items = booksPrices;
			}
			if (
				!state.checked &&
				state.min_price &&
				state.max_price &&
				state.bookName
			) {
				const booksPrices = state.items.filter((book) => {
					if (state.min_price <= book.price && book.price <= state.max_price) {
						return book;
					}
					// eslint-disable-next-line array-callback-return
					return;
				});
				state.items = booksPrices;
			}
			if (
				!state.checked &&
				state.min_price &&
				state.max_price &&
				!state.bookName
			) {
				const booksPrices = state.items.filter((book) => {
					if (state.min_price <= book.price && book.price <= state.max_price) {
						return book;
					}
					// eslint-disable-next-line array-callback-return
					return;
				});
				state.items = booksPrices;
			}
		},

		filterPrice: (state, action: PayloadAction<Price>) => {
			state.min_price = action.payload.minPrice;
			state.max_price = action.payload.maxPrice;
			if (action.payload.checked) {
				const booksPrices = state.items.filter((book) => {
					if (state.min_price <= book.price && book.price <= state.max_price) {
						return book;
					}
					// eslint-disable-next-line array-callback-return
					return;
				});
				state.items = booksPrices;
			}
			if (!action.payload.checked) {
				state.items = state.all_items;
				state.min_price = 0;
				state.max_price = 0;
			}
			if (
				state.bookName &&
				state.checked &&
				state.bookLanguage &&
				!state.min_price &&
				!state.min_price
			) {
				const books = state.items.filter(
					(book) => book.edition === state.bookLanguage
				);
				const booksCategory = books.filter(
					(book) => book.category === state.bookName
				);
				state.items = booksCategory;
			}

			if (
				!action.payload.checked &&
				state.bookName &&
				!state.min_price &&
				!state.max_price
			) {
				state.items = state.items.filter(
					(book) => book.category === state.bookName
				);
			}

			if (
				state.bookLanguage &&
				!state.bookName &&
				!state.max_price &&
				!state.min_price
			) {
				state.items = state.items.filter(
					(book) => book.edition === state.bookLanguage
				);
			}
		},

		allBooks: (state) => {
			state.items = state.all_items;
			state.bookName = "";
			state.active = false;

			if (state.bookLanguage && !state.bookName) {
				state.items = state.all_items.filter(
					(book) => book.edition === state.bookLanguage
				);
			}

			if (
				state.bookLanguage &&
				!state.bookName &&
				state.max_price &&
				state.min_price
			) {
				const booksPrices = state.items.filter((book) => {
					if (state.min_price <= book.price && book.price <= state.max_price) {
						return book;
					}
					// eslint-disable-next-line array-callback-return
					return;
				});
				state.items = booksPrices;
			}

			if (
				!state.bookLanguage &&
				!state.bookName &&
				state.max_price &&
				state.min_price
			) {
				const booksPrices = state.items.filter((book) => {
					if (state.min_price <= book.price && book.price <= state.max_price) {
						return book;
					}
					// eslint-disable-next-line array-callback-return
					return;
				});
				state.items = booksPrices;
			}
		},
		chcekedValue: (state) => {
			state.bookLanguage = "";
			state.checked = false;
		},
	},
});

export const {
	filterCategory,
	filterLanguage,
	allBooks,
	chcekedValue,
	filterPrice,
} = filterSlice.actions;

export default filterSlice.reducer;
