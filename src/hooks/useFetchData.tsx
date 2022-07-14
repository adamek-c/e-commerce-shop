/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../interfaces/FiltrInterfaces/filtr";

const axiosInstance = axios.create({
	baseURL: "https://my-books-api-projects.herokuapp.com",
});

const useFetchData = () => {
	const getBooks = createAsyncThunk<Book[]>(
		"filter/getBooks",
		async (_, thunkAPI) => {
			try {
				const data = await axiosInstance.get("/books");
				return data.data;
			} catch (error: any) {
				const message = `${error.response.statusText} ${error.response.status}`;
				return thunkAPI.rejectWithValue(message);
			}
		},
	);
	return getBooks;
};

export default useFetchData;
