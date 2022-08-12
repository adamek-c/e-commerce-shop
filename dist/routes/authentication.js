"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticationController_1 = require("../controllers/authenticationController");
const router = express_1.default.Router();
router.post("/register", authenticationController_1.register);
router.post("/login", authenticationController_1.login);
exports.default = router;
