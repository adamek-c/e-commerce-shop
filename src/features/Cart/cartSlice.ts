import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
	id: string;
	title: string;
	author: string;
	price: number;
}

interface CartItems {
	cart: Cart[];
	amount: number;
	total: number;
}

const initialState: CartItems = {
	cart: [],
	amount: 0,
	total: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
});

export default cartSlice.reducer;
