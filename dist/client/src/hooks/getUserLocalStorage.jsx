"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable consistent-return */
const useUserName = () => {
    try {
        const { user } = JSON.parse(localStorage.getItem("user") || "");
        if (user) {
            return user.name;
        }
    }
    catch (error) {
        return null;
    }
};
exports.default = useUserName;
