import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/Cart/cartSlice";
import filterSlice from "../features/Filter/filterSlice";

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		cart: cartSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
