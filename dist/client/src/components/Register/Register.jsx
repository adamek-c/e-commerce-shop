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
const react_router_1 = require("react-router");
const react_redux_1 = require("react-redux");
const Input_1 = __importDefault(require("../shared/Login/Input"));
const useAutoFocusInput_1 = __importDefault(require("../../hooks/useAutoFocusInput"));
const authSlice_1 = require("../../features/auth/authSlice");
const user_1 = require("../../features/user/user");
const Register = () => {
    const { user, message } = (0, react_redux_1.useSelector)((state) => state.auth);
    const { activeForm } = (0, react_redux_1.useSelector)((state) => state.userActive);
    const refFocus = (0, useAutoFocusInput_1.default)(activeForm);
    const [formRegister, setFormRegister] = (0, react_1.useState)({
        name: "",
        lastName: "",
        email: "",
        password: "",
    });
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_1.useNavigate)();
    const { name, lastName, email, password } = formRegister;
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        const userData = {
            name,
            lastName,
            email,
            password,
        };
        return dispatch((0, authSlice_1.register)(userData));
    };
    (0, react_1.useEffect)(() => {
        if (user) {
            navigate("/");
        }
        dispatch((0, authSlice_1.reset)());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, navigate]);
    const handleChange = (e) => {
        setFormRegister((prevState) => (Object.assign(Object.assign({}, prevState), { [e.target.name]: e.target.value })));
    };
    return (<div className="max-w-xl py-40 mx-auto px-10 sm:px-0">
			<h2 className="text-3xl font-bold text-center mb-20">
				It's you first time
			</h2>
			{!activeForm && (<>
					{message && (<h3 className="mb-10 font-bold text-[#F25050] text-xl capitalize flex items-center justify-center">
							<span className="material-symbols-outlined mr-4">warning</span>
							{message}
						</h3>)}
					<form className="text-2xl" onSubmit={handleSubmitRegister}>
						<div className="flex flex-col space-y-4 mb-16">
							<Input_1.default props="email" ref={refFocus} value={email} onChange={handleChange}/>
						</div>
						<div className="flex lg:space-x-3 flex-col lg:flex-row mb-16">
							<div className="space-y-2 flex flex-col">
								<Input_1.default props="name" value={name} onChange={handleChange}/>
							</div>
							<div className="space-y-2 flex flex-col mt-16 lg:mt-0">
								<Input_1.default props="lastName" value={lastName} onChange={handleChange}/>
							</div>
						</div>
						<div className="flex flex-col space-y-4 mb-16">
							<Input_1.default props="password" iconVisible="visibility" iconHidden="visibility_off" value={password} onChange={handleChange}/>
						</div>
						<button type="submit" className="font-bold text-3xl bg-[#6AD991] text-white w-full py-5 transition hover:bg-[#1AD991] mt-12">
							Sign Up
						</button>
					</form>
				</>)}
			{activeForm && (<>
					<button type="button" className="font-bold text-3xl bg-white text-[#6AD991] w-full py-5 transition hover:bg-[#6AD991] border-2 border-[#6AD991] hover:text-white transition" onClick={() => dispatch((0, user_1.registerForm)())}>
						Sign Up
					</button>
					<div className="mt-20 space-y-12 capitalize">
						<h3 className="text-2xl font-medium">you will gain</h3>
						<div className="flex items-center space-x-4 text-xl">
							<span className="material-symbols-outlined">history</span>
							<h4>access to purchase history</h4>
						</div>
						<div className="flex items-center space-x-4 text-xl">
							<span className="material-symbols-outlined">sell</span>
							<h4>sale notices</h4>
						</div>
					</div>
				</>)}
		</div>);
};
exports.default = Register;
