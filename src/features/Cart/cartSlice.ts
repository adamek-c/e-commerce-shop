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
			const itemIndex = state.cart.findIndex(
				(item) => item.Ids === action.payload.Ids
			);

			if (itemIndex >= 0) {
				state.cart[itemIndex].cartCount += 1;
			} else {
				const tempItem = { ...action.payload, cartCount: 1 };
				state.cart.push(tempItem);
			}
		},
		removeItem: (state, action: PayloadAction<number>) => {
			state.cart = state.cart.filter((item) => item.Ids !== action.payload);
			console.log(action.payload);
		},
	},
});

export const { addToCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
