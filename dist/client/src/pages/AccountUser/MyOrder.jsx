"use strict";
/* eslint-disable arrow-body-style */
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const MyOrder = () => {
    return (<section className="w-full">
			<div className="pb-16">
				<h4 className="text-[1.4rem] capitalize hidden md:block">
					my account {" > "} my orders
				</h4>
				<h3 className="mt-4 text-3xl text-center md:text-left">My Orders</h3>
			</div>
			<div className="my-16 md:my-32 text-center space-y-4">
				<span className="material-symbols-outlined text-7xl bg-[#6AD991] rounded-full p-2 mb-4">
					flutter_dash
				</span>
				<h4 className="text-4xl">No orders</h4>
				<p className="text-2xl">There are no orders for the selected range</p>
				<div className="pt-8">
					<react_router_dom_1.Link to="/" className="capitalize text-2xl mt-2 font-bold underline">
						find something for yourself
					</react_router_dom_1.Link>
				</div>
			</div>
		</section>);
};
exports.default = MyOrder;
