"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeNotFound = (req, res) => res.status(404).json("Unknow");
exports.default = routeNotFound;
