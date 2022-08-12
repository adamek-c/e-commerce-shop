import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/Cart/cartSlice";
import filterSlice from "../features/Filter/filterSlice";
import authSlice from "../features/auth/authSlice";
import userActiveSlice from "../features/user/user";

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		filter: filterSlice,
		auth: authSlice,
		userActive: userActiveSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
