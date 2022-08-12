"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotals = exports.removeItem = exports.addToCart = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    cart: [],
    amount: 0,
    total: 0,
};
const cartSlice = (0, toolkit_1.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.Ids === action.payload.Ids);
            if (itemIndex >= 0) {
                state.cart[itemIndex].cartCount += 1;
            }
            else {
                const tempItem = Object.assign(Object.assign({}, action.payload), { cartCount: 1 });
                state.cart.push(tempItem);
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.Ids !== action.payload);
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cart.forEach((item) => {
                amount += item.cartCount;
                total += item.cartCount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
});
_a = cartSlice.actions, exports.addToCart = _a.addToCart, exports.removeItem = _a.removeItem, exports.calculateTotals = _a.calculateTotals;
exports.default = cartSlice.reducer;
