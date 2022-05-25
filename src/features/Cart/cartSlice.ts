import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItems, Items } from "../../interfaces/CartInterfaces/cart";

const initialState: CartItems = {
	cart: [],
	amount: 0,
	total: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Items>) => {
			state.cart.push(action.payload);
			state.amount += 1;
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
