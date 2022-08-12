"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
const react_router_dom_1 = require("react-router-dom");
const LinkAccount = () => {
    return (<div className="place-self-center md:place-self-start mt-4 w-72">
			<h4 className="font-semibold text-2xl">My Account</h4>
			<ul className="capitalize flex flex-col space-y-4 pl-4 mt-4 text-xl">
				<li>
					<react_router_dom_1.Link to="/my-account" className="hover:text-slate-500 transition">
						my orders
					</react_router_dom_1.Link>
				</li>
				<li>
					<react_router_dom_1.Link to="my-returns" className="hover:text-slate-500 transition">
						my returns
					</react_router_dom_1.Link>
				</li>
				<li>
					<react_router_dom_1.Link to="personal-data" className="hover:text-slate-500 transition">
						personal data
					</react_router_dom_1.Link>
				</li>
			</ul>
			<button type="button" className="hover:text-slate-500 transition capitalize pl-4 mt-4 text-xl">
				log out
			</button>
		</div>);
};
exports.default = LinkAccount;
