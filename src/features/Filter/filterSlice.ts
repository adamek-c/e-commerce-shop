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
	reducers: {},
});

export default filterSlice.reducer;
