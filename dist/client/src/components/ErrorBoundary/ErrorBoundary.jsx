"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react/destructuring-assignment */
const react_1 = require("react");
const Container_1 = __importDefault(require("../shared/Container/Container"));
const ErrorContainer_1 = __importDefault(require("../shared/Error/ErrorContainer"));
class ErrorBoundary extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }
    render() {
        if (this.state.hasError) {
            return (<Container_1.default>
					<div className="flex justify-center">
						<ErrorContainer_1.default message="Sorry something went wrong"/>
					</div>
				</Container_1.default>);
        }
        return this.props.children;
    }
}
exports.default = ErrorBoundary;
