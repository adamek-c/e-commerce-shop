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
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
