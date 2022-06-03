import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
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
	checkedPrice: false,
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
			state.active = true;

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
			if (action.payload.name && action.payload.checked) {
				const books = state.all_items.filter(
					(book) => book.edition === action.payload.name
				);
				state.checked = true;
				state.bookLanguage = action.payload.name;
				state.items = books;
			}
			if (!action.payload.checked) {
				state.items = state.all_items;
				state.checked = false;
				state.bookLanguage = "";
			}
			if (state.bookName && state.checked) {
				const books = state.items.filter(
					(book) => book.category === state.bookName
				);
				if (books) {
					const booksPrices = books.filter((book) => {
						if (
							state.min_price <= book.price &&
							book.price <= state.max_price
						) {
							return book;
						}
						// eslint-disable-next-line array-callback-return
						return;
					});
					state.items = booksPrices;
				}
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
			state.checkedPrice = true;
			if (action.payload.checked && state.checkedPrice && state.active) {
				const bookName = state.all_items.filter(
					(book) => book.category === state.bookName
				);
				const bookLanguage = bookName.filter(
					(book) => book.edition === state.bookLanguage
				);
				if (bookLanguage) {
					const booksPrices = bookLanguage.filter((book) => {
						if (
							state.min_price <= book.price &&
							book.price <= state.max_price
						) {
							return book;
						}
						// eslint-disable-next-line array-callback-return
						return;
					});
					state.items = booksPrices;
				}
			}
			if (!action.payload.checked) {
				state.items = state.all_items;
				state.min_price = 0;
				state.max_price = 0;
				state.checkedPrice = false;
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
			if (
				state.checked &&
				state.max_price &&
				state.min_price &&
				!state.active
			) {
				const bookLanguage = state.all_items.filter(
					(book) => book.edition === state.bookLanguage
				);
				if (bookLanguage) {
					const booksPrices = bookLanguage.filter((book) => {
						if (
							state.min_price <= book.price &&
							book.price <= state.max_price
						) {
							return book;
						}
						// eslint-disable-next-line array-callback-return
						return;
					});
					state.items = booksPrices;
				}
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

export const allBooksStorage = (state: RootState) => state.filter.all_items;
export const bookNames = (state: RootState) => state.filter.bookName;
export const bookLanguages = (state: RootState) => state.filter.all_items;
export const checkedValues = (state: RootState) => state.filter.checked;
export const bookLangs = (state: RootState) => state.filter.bookLanguage;

export const minPrices = (state: RootState) => state.filter.min_price;
export const maxPrices = (state: RootState) => state.filter.max_price;
export const checkeds = (state: RootState) => state.filter.checkedPrice;

export const {
	filterCategory,
	filterLanguage,
	allBooks,
	chcekedValue,
	filterPrice,
} = filterSlice.actions;

export default filterSlice.reducer;
