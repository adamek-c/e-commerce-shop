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
exports.reset = exports.login = exports.register = exports.removeUserLStorage = void 0;
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable prettier/prettier */
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
const userInfo = () => {
    try {
        return JSON.parse(localStorage.getItem("user") || "");
    }
    catch (error) {
        return null;
    }
};
const removeUserLStorage = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield window.localStorage.removeItem("user");
    }
    catch (error) {
        return null;
    }
});
exports.removeUserLStorage = removeUserLStorage;
const initialState = {
    user: userInfo(),
    token: "",
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    messageLogin: "",
};
// register user
exports.register = (0, toolkit_1.createAsyncThunk)("auth/register", (userData, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataUser = yield axios_1.default.post("/api/v1/register", userData);
        if (dataUser.data) {
            localStorage.setItem("user", JSON.stringify(dataUser.data));
        }
        return dataUser.data;
    }
    catch (error) {
        const message = `${error.response.data.message}`;
        return thunkAPI.rejectWithValue(message);
    }
}));
exports.login = (0, toolkit_1.createAsyncThunk)("auth/login", (loginData, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginUser = yield axios_1.default.post("/api/v1/login", loginData);
        if (loginUser.data) {
            localStorage.setItem("user", JSON.stringify(loginUser.data));
        }
        return loginUser.data;
    }
    catch (error) {
        const message = `${error.response.data.message}`;
        return thunkAPI.rejectWithValue(message);
    }
}));
const authSlice = (0, toolkit_1.createSlice)({
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
        builder.addCase(exports.register.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(exports.register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(exports.register.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.user = null;
            state.isSuccess = false;
            state.message = action.payload;
        });
        builder.addCase(exports.login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(exports.login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isSuccess = true;
        });
        builder.addCase(exports.login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.user = null;
            state.isSuccess = false;
            state.messageLogin = action.payload;
        });
    },
});
exports.reset = authSlice.actions.reset;
exports.default = authSlice.reducer;
