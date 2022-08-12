"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const react_router_1 = require("react-router");
const getUserLocalStorage_1 = __importDefault(require("../hooks/getUserLocalStorage"));
const ProtectedUserPage = () => {
    const user = (0, getUserLocalStorage_1.default)();
    return <>{!user ? <react_router_1.Navigate to="/" replace/> : <react_router_1.Outlet />};</>;
};
exports.default = ProtectedUserPage;
