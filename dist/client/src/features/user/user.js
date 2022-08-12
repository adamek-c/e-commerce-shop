"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerForm = exports.loginForm = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    activeForm: true,
};
const userActiveSlice = (0, toolkit_1.createSlice)({
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
_a = userActiveSlice.actions, exports.loginForm = _a.loginForm, exports.registerForm = _a.registerForm;
exports.default = userActiveSlice.reducer;
