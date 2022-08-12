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
/* eslint-disable arrow-body-style */
const react_1 = __importStar(require("react"));
const Input_1 = __importDefault(require("../../components/shared/Login/Input"));
const PersonalData = () => {
    const [formRegister, setFormRegister] = (0, react_1.useState)({
        name: "",
        lastName: "",
        email: "",
        password: "",
        birthday: "",
    });
    const handleChange = (e) => {
        setFormRegister((prevState) => (Object.assign(Object.assign({}, prevState), { [e.target.name]: e.target.value })));
    };
    const { name, lastName, email, password } = formRegister;
    return (<section className="w-full">
			<div>
				<h4 className="text-[1.4rem] capitalize">
					my account {" > "} my personal data
				</h4>
				<hr className="mt-8"/>
				<h3 className="mt-8 text-3xl">My Data</h3>
				<p className="mt-4 text-xl capitalize">
					<span className="text-[#F25050]">*</span> fields required
				</p>
			</div>
			<form className="text-2xl mt-16">
				<div className="flex lg:space-x-3 flex-col lg:flex-row mb-16">
					<div className="space-y-2 flex flex-col">
						<Input_1.default props="name" value={name} onChange={handleChange}/>
						<div className="hidden">This field is required</div>
					</div>
					<div className="space-y-2 flex flex-col mt-16 lg:mt-0">
						<Input_1.default props="lastName" value={lastName} onChange={handleChange}/>
						<div className="hidden">This field is required</div>
					</div>
				</div>
				<div className="flex flex-col space-y-4 mb-16">
					<Input_1.default props="email" value={email} onChange={handleChange}/>
					<div className="hidden">This field is required</div>
				</div>
				<h3 className="my-8 text-3xl capitalize">change you password</h3>
				<div className="flex flex-col space-y-4 mb-16">
					<Input_1.default props="password" value={password} onChange={handleChange}/>
					<div className="hidden">This field is required</div>
				</div>
				<h3 className="my-8 text-3xl capitalize">Delete account</h3>
				<div>
					<button type="button" className="text-2xl py-4 px-16 bg-[#F25050] text-white transition hover:bg-[#d25050]">
						Delete
					</button>
				</div>
				<div className="flex justify-end">
					<button type="button" className="font-bold text-3xl bg-[#6AD991] text-white w-full py-5 transition hover:bg-[#1AD991] mt-12 w-fit px-10">
						Save Changes
					</button>
				</div>
			</form>
		</section>);
};
exports.default = PersonalData;
