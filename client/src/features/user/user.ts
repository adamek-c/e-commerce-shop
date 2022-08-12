import { createSlice } from "@reduxjs/toolkit";

interface Props {
	activeForm: boolean;
}

const initialState: Props = {
	activeForm: true,
};

const userActiveSlice = createSlice({
	name: "userActive",
	initialState,
	reducers: {
		loginForm: (state) => {
			state.activeForm = true;
		},
		registerForm: (state) => {
			state.activeForm = false;
		},
	},
});

export const { loginForm, registerForm } = userActiveSlice.actions;

export default userActiveSlice.reducer;
