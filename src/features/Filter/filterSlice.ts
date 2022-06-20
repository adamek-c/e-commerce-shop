/* eslint-disable array-callback-return */
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
	filter: {
		active: false,
		bookName: "",
		bookLanguage: "",
		checked: false,
		checkedPrice: false,
		min_price: 0,
		max_price: 0,
	},
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filter: (state) => {
			const { all_items } = state;
			const { bookName, bookLanguage, min_price, max_price } = state.filter;

			let tempProducts = [...all_items];

			// category
			if (bookName) {
				tempProducts = tempProducts.filter(
					(book) => book.category === bookName
				);
			}
			// language
			if (bookLanguage) {
				tempProducts = tempProducts.filter(
					(book) => book.edition === bookLanguage
				);
			}

			// price
			if (max_price && min_price) {
				tempProducts = tempProducts.filter(
					(product) => product.price >= min_price && product.price <= max_price
				);
			}

			state.items = tempProducts;
		},

		filterLanguage: (state, action: PayloadAction<Language>) => {
			state.filter.bookLanguage = action.payload.name;
			state.filter.checked = action.payload.checked as boolean;

			if (!action.payload.checked) {
				state.filter.bookLanguage = "";
				state.filter.checked = false;
			}
		},
		filterPrice: (state, action: PayloadAction<Price>) => {
			state.filter.min_price = action.payload.minPrice;
			state.filter.max_price = action.payload.maxPrice;
			state.filter.checkedPrice = action.payload.checked as boolean;

			if (!action.payload.checked) {
				state.filter.min_price = 0;
				state.filter.max_price = 0;
			}
		},
		filterCategory: (state, action: PayloadAction<string | undefined>) => {
			state.filter.bookName = action.payload;
			state.filter.active = true;
		},
		allBooks: (state) => {
			state.filter.bookName = "";
			state.filter.active = false;
		},
	},
});

export const allBooksStorage = (state: RootState) => state.filter.all_items;
export const bookNames = (state: RootState) => state.filter.filter.bookName;
export const bookLanguages = (state: RootState) => state.filter.all_items;
export const checkedValues = (state: RootState) => state.filter.filter.checked;
export const bookLangs = (state: RootState) => state.filter.filter.bookLanguage;

export const minPrices = (state: RootState) => state.filter.filter.min_price;
export const maxPrices = (state: RootState) => state.filter.filter.max_price;
export const checkedPrice = (state: RootState) =>
	state.filter.filter.checkedPrice;

export const { allBooks, filterCategory, filterLanguage, filterPrice, filter } =
	filterSlice.actions;

export default filterSlice.reducer;
