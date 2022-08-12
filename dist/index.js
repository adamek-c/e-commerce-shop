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
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const connect_1 = __importDefault(require("./db/connect"));
const authentication_1 = __importDefault(require("./routes/authentication"));
const body_parser_1 = __importDefault(require("body-parser"));
const routeNotFound_1 = __importDefault(require("./middleware/routeNotFound"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
require("dotenv/config");
const connectionDB = process.env.MONGO_URI;
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// routers
app.use("/api/v1", authentication_1.default);
// display 404 page if route doesn't exist
app.use(routeNotFound_1.default);
// error default
app.use(errorHandler_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, connect_1.default)(connectionDB);
        app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
            console.log(`server run ${port}`);
        }));
    }
    catch (error) {
        console.log(error);
    }
});
start();
