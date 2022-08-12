"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.filterPrice = exports.filterLanguage = exports.filterCategory = exports.allBooks = exports.checkedPrice = exports.maxPrices = exports.minPrices = exports.bookLangs = exports.checkedValues = exports.bookLanguages = exports.bookNames = exports.allBooksStorage = exports.getBooks = void 0;
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
/* eslint-disable no-tabs */
/* eslint-disable camelcase */
const toolkit_1 = require("@reduxjs/toolkit");
const useFetchData_1 = __importDefault(require("../../hooks/useFetchData"));
var Pending;
(function (Pending) {
    Pending["Loading"] = "loading";
    Pending["Succeeded"] = "succeeded";
    Pending["Failed"] = "failed";
})(Pending || (Pending = {}));
const initialState = {
    all_items: [],
    items: [],
    filter: {
        active: false,
        bookName: "",
        bookLanguage: "",
        checked: false,
        checkedPrice: false,
        min_price: 0,
        max_price: 0,
    },
    pending: "idle",
    error: "",
};
exports.getBooks = (0, useFetchData_1.default)();
const filterSlice = (0, toolkit_1.createSlice)({
    name: "filter",
    initialState,
    reducers: {
        filter: (state) => {
            const { all_items } = state;
            const { bookName, bookLanguage, min_price, max_price } = state.filter;
            let tempProducts = [...all_items];
            // category
            if (bookName) {
                tempProducts = tempProducts.filter((book) => book.category === bookName);
            }
            // language
            if (bookLanguage) {
                tempProducts = tempProducts.filter((book) => book.edition === bookLanguage);
            }
            // price
            if (max_price && min_price) {
                tempProducts = tempProducts.filter((product) => product.price >= min_price && product.price <= max_price);
            }
            state.items = tempProducts;
        },
        filterLanguage: (state, action) => {
            state.filter.bookLanguage = action.payload.name;
            // eslint-disable-next-line prettier/prettier
            state.filter.checked = action.payload.checked;
            if (!action.payload.checked) {
                state.filter.bookLanguage = "";
                state.filter.checked = false;
            }
        },
        filterPrice: (state, action) => {
            state.filter.min_price = action.payload.minPrice;
            state.filter.max_price = action.payload.maxPrice;
            state.filter.checkedPrice = action.payload.checked;
            if (!action.payload.checked) {
                state.filter.min_price = 0;
                state.filter.max_price = 0;
            }
        },
        filterCategory: (state, action) => {
            state.filter.bookName = action.payload;
            state.filter.active = true;
        },
        allBooks: (state) => {
            state.filter.bookName = "";
            state.filter.active = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(exports.getBooks.pending, (state) => {
            state.pending = Pending.Loading;
        });
        builder.addCase(exports.getBooks.fulfilled, (state, action) => {
            state.pending = Pending.Succeeded;
            state.all_items = action.payload;
            state.items = action.payload;
        });
        builder.addCase(exports.getBooks.rejected, (state, action) => {
            state.pending = Pending.Failed;
            state.error = action.payload;
        });
    },
});
const allBooksStorage = (state) => state.filter.all_items;
exports.allBooksStorage = allBooksStorage;
const bookNames = (state) => state.filter.filter.bookName;
exports.bookNames = bookNames;
const bookLanguages = (state) => state.filter.all_items;
exports.bookLanguages = bookLanguages;
const checkedValues = (state) => state.filter.filter.checked;
exports.checkedValues = checkedValues;
const bookLangs = (state) => state.filter.filter.bookLanguage;
exports.bookLangs = bookLangs;
const minPrices = (state) => state.filter.filter.min_price;
exports.minPrices = minPrices;
const maxPrices = (state) => state.filter.filter.max_price;
exports.maxPrices = maxPrices;
const checkedPrice = (state) => state.filter.filter.checkedPrice;
exports.checkedPrice = checkedPrice;
_a = filterSlice.actions, exports.allBooks = _a.allBooks, exports.filterCategory = _a.filterCategory, exports.filterLanguage = _a.filterLanguage, exports.filterPrice = _a.filterPrice, exports.filter = _a.filter;
exports.default = filterSlice.reducer;
