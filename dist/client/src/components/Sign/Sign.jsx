"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const user_1 = require("../../features/user/user");
const Sign = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    return (<div className="absolute hidden group-hover:lg:block  top-[30px] bg-white border w-[35rem] -right-10 z-20 cursor-auto">
			<section className="p-16">
				<div className="text-2xl font-bold mb-12">You are already a user?</div>
				<react_router_dom_1.Link to="login" className="text-3xl capitalize bg-[#6AD991] text-white py-4 px-16 font-bold transition hover:bg-[#1AD991]" onClick={() => dispatch((0, user_1.loginForm)())}>
					Sign in
				</react_router_dom_1.Link>
			</section>
			<section className="p-16 bg-[#F2F2F2]">
				<div className="text-2xl font-bold mb-4">It's you first time?</div>
				<p className="text-xl mb-12">
					You will get access to many features and discounts
				</p>
				<react_router_dom_1.Link to="login" className="text-3xl capitalize border-2 border-[#6AD991] text-[#6AD991] py-4 px-16 font-bold transition hover:bg-[#6AD991] hover:text-white" onClick={() => dispatch((0, user_1.registerForm)())}>
					Sign up
				</react_router_dom_1.Link>
			</section>
		</div>);
};
exports.default = Sign;
