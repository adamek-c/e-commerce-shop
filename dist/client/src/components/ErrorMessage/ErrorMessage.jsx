"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = __importDefault(require("../shared/Container/Container"));
const ErrorContainer_1 = __importDefault(require("../shared/Error/ErrorContainer"));
const Error = ({ error }) => (<Container_1.default>
		<ErrorContainer_1.default message={error}/>
	</Container_1.default>);
exports.default = Error;
