"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connect = (connectionDB) => mongoose_1.default.connect(connectionDB, () => {
    console.log("connected to database");
});
exports.default = connect;
