/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../interfaces/FiltrInterfaces/filtr";

const URL = "https://my-books-api-projects.herokuapp.com/books";

const useFetchData = () => {
	// eslint-disable-next-line consistent-return
	const getBooks = createAsyncThunk<Book[]>(
		"filter/getBooks",
		async (_, thunkAPI) => {
			try {
				const data = await axios.get(URL);
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
