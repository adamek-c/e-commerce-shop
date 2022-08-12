"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable indent */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const Input = (0, react_1.forwardRef)(({ props, iconVisible, iconHidden, value, onChange }, ref) => {
    const uniqueId = (0, react_1.useId)();
    const [showPassowrd, setShowPassword] = (0, react_1.useState)(true);
    const handleShowPassword = () => {
        setShowPassword(!showPassowrd);
    };
    return (<>
				<label htmlFor={`${uniqueId}-${props}`}>
					<span className="after:content-['*'] after:ml-0.5 after:text-[#F25050] capitalize">
						{props === "lastName" ? "last name" : props}
					</span>
				</label>
				<div className="relative">
					<input ref={ref} id={`${uniqueId}-${props}`} name={props} type={props === "password" && showPassowrd ? "password" : "text"} value={value} onChange={onChange} className={`${props === "password"
            ? "pr-16 border-b focus:outline-none pb-2 focus:border-b-black bg-inherit w-full"
            : "pr-0 border-b focus:outline-none pb-2 focus:border-b-black bg-inherit w-full"}`}/>
					{props === "password" && (<div className="group">
							<button type="button" className="material-symbols-outlined cursor-pointer absolute right-0 -top-4 hover:bg-[#ECECEC] rounded-full p-2 transition" onClick={handleShowPassword}>
								{showPassowrd ? iconVisible : iconHidden}
							</button>
							<p className="hidden group-hover:block text-right mt-4 text-[11px] absolute right-0 capitalize">
								{showPassowrd ? "show password" : "hide password"}
							</p>
						</div>)}
				</div>
			</>);
});
Input.propTypes = {
    iconVisible: prop_types_1.default.string,
    iconHidden: prop_types_1.default.string,
};
exports.default = Input;
