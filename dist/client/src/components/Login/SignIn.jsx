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
const useAutoFocusInput_1 = __importDefault(require("../../hooks/useAutoFocusInput"));
const user_1 = require("../../features/user/user");
const authSlice_1 = require("../../features/auth/authSlice");
const Input_1 = __importDefault(require("../shared/Login/Input"));
const SignIn = () => {
    const { user, messageLogin } = (0, react_redux_1.useSelector)((state) => state.auth);
    const { activeForm } = (0, react_redux_1.useSelector)((state) => state.userActive);
    const refFocus = (0, useAutoFocusInput_1.default)(activeForm);
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_1.useNavigate)();
    const [formLogIn, setFormLogIn] = (0, react_1.useState)({
        email: "",
        password: "",
    });
    const { email, password } = formLogIn;
    const handleSubmitLogIn = (e) => {
        e.preventDefault();
        const userLogIn = {
            email,
            password,
        };
        return dispatch((0, authSlice_1.login)(userLogIn));
    };
    const handleChange = (e) => {
        setFormLogIn((prevState) => (Object.assign(Object.assign({}, prevState), { [e.target.name]: e.target.value })));
    };
    (0, react_1.useEffect)(() => {
        if (user) {
            navigate("/", {
                replace: true,
            });
        }
        dispatch((0, authSlice_1.reset)());
    }, [user, navigate, dispatch]);
    return (<div className="max-w-xl py-40 mx-auto px-10 sm:px-0">
			<h2 className="text-3xl font-bold text-center mb-16">
				Are you already a user?
			</h2>
			{activeForm && (<>
					{messageLogin && (<h3 className="mb-10 font-bold text-[#F25050] text-xl capitalize flex items-center justify-center">
							<span className="material-symbols-outlined mr-4">warning</span>
							{messageLogin}
						</h3>)}
					<form className="text-2xl" onSubmit={handleSubmitLogIn}>
						<div className="flex flex-col space-y-4 mb-16">
							<Input_1.default props="email" ref={refFocus} value={email} onChange={handleChange}/>
							<div className="text-xl text-[#F25050] hidden">
								This field is required
							</div>
						</div>
						<div className="flex flex-col space-y-4 mb-16">
							<Input_1.default props="password" iconVisible="visibility" iconHidden="visibility_off" value={password} onChange={handleChange}/>
							<div className="text-xl text-[#F25050] hidden">
								This field is required
							</div>
						</div>
						<button type="submit" className="font-bold text-3xl bg-[#6AD991] text-white w-full py-5 transition hover:bg-[#1AD991] mt-12">
							Sign In
						</button>
					</form>
				</>)}
			{!activeForm && (<button type="button" className="font-bold text-3xl bg-white text-[#6AD991] w-full py-5 transition hover:bg-[#6AD991] border-2 border-[#6AD991] hover:text-white transition" onClick={() => dispatch((0, user_1.loginForm)())}>
					Sign In
				</button>)}
		</div>);
};
exports.default = SignIn;
