"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const toolkit_1 = require("@reduxjs/toolkit");
const axiosInstance = axios_1.default.create({
    baseURL: "https://my-books-api-projects.herokuapp.com",
});
const useFetchData = () => {
    const getBooks = (0, toolkit_1.createAsyncThunk)("filter/getBooks", (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield axiosInstance.get("/books");
            return data.data;
        }
        catch (error) {
            const message = `${error.response.statusText} ${error.response.status}`;
            return thunkAPI.rejectWithValue(message);
        }
    }));
    return getBooks;
};
exports.default = useFetchData;
