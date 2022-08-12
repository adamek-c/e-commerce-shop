/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Props {
	name: string;
	lastName: string;
	password: string;
	email: string;
}

interface LogIn {
	password: string;
	email: string;
}

export type UserAuth = {
	user: Props | LogIn | null;
	token: string;
	isLoading: boolean;
	isError: boolean;
	isSuccess: boolean;
	message: string | any;
	messageLogin: string | any;
};

const userInfo = () => {
	try {
		return JSON.parse(localStorage.getItem("user") || "");
	} catch (error) {
		return null;
	}
};

export const removeUserLStorage = () => window.localStorage.removeItem("user");

const initialState: UserAuth = {
	user: userInfo(),
	token: "",
	isLoading: false,
	isError: false,
	isSuccess: false,
	message: "",
	messageLogin: "",
};

// register user

export const register = createAsyncThunk(
	"auth/register",
	async (userData: Props, thunkAPI) => {
		try {
			const dataUser = await axios.post<Props>("/api/v1/register", userData);
			if (dataUser.data) {
				localStorage.setItem("user", JSON.stringify(dataUser.data));
			}
			return dataUser.data;
		} catch (error: any) {
			const message = `${error.response.data.message}`;
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const login = createAsyncThunk(
	"auth/login",
	async (loginData: LogIn, thunkAPI) => {
		try {
			const loginUser = await axios.post<LogIn>("/api/v1/login", loginData);
			if (loginUser.data) {
				localStorage.setItem("user", JSON.stringify(loginUser.data));
			}
			return loginUser.data;
		} catch (error: any) {
			const message = `${error.response.data.message}`;
			return thunkAPI.rejectWithValue(message);
		}
	},
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = "";
			state.messageLogin = "";
		},
	},
	extraReducers: (builder) => {
		builder.addCase(register.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(register.fulfilled, (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
			state.isSuccess = true;
		});
		builder.addCase(register.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.user = null;
			state.isSuccess = false;
			state.message = action.payload;
		});
		builder.addCase(login.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
			state.isSuccess = true;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.user = null;
			state.isSuccess = false;
			state.messageLogin = action.payload;
		});
	},
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
