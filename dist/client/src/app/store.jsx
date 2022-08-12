"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const cartSlice_1 = __importDefault(require("../features/Cart/cartSlice"));
const filterSlice_1 = __importDefault(require("../features/Filter/filterSlice"));
const authSlice_1 = __importDefault(require("../features/auth/authSlice"));
const user_1 = __importDefault(require("../features/user/user"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        cart: cartSlice_1.default,
        filter: filterSlice_1.default,
        auth: authSlice_1.default,
        userActive: user_1.default,
    },
});
