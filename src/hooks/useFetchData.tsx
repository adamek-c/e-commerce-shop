/* eslint-disable no-console */
/* eslint-disable no-tabs */
/* eslint-disable prettier/prettier */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../interfaces/FiltrInterfaces/filtr";

const URL = "https://my-books-api-projects.herokuapp.com/books";

const useFetchData = () => {
	// eslint-disable-next-line consistent-return
	const getBooks = createAsyncThunk<Book[]>("filter/getBooks", async () => {
		try {
			const data = await axios.get(URL);
			if (data.status !== 200) {
				throw new Error("Something went wrong!");
			}
			return data.data;
		} catch (error: any) {
			console.log(error);
		}
	});
	return getBooks;
};

export default useFetchData;
