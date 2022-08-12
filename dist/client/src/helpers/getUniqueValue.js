"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUniqueValue = (data, key) => {
    let unqiueValues;
    if (key) {
        const unique = new Set(data);
        unqiueValues = Array.from(unique).sort();
    }
    return unqiueValues;
};
exports.default = getUniqueValue;
