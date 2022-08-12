"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PulseLoader_1 = __importDefault(require("react-spinners/PulseLoader"));
const Container_1 = __importDefault(require("../shared/Container/Container"));
const Loading = () => (<Container_1.default>
		<div className="flex justify-center">
			<span className="mt-20 px-8">
				<PulseLoader_1.default size={30} color="#6AD991"/>
			</span>
		</div>
	</Container_1.default>);
exports.default = Loading;
