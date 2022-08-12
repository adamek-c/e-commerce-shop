"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const CartSmall = () => {
    const products = (0, react_redux_1.useSelector)((state) => state.cart.cart);
    const { total } = (0, react_redux_1.useSelector)((state) => state.cart);
    return (<div className="absolute hidden group-hover:lg:block top-[30px] bg-white border right-0 w-[35rem] z-20 cursor-auto">
			<section className="max-h-72 overflow-auto">
				<ul>
					{products.map((item) => (<li key={item.Ids} className="pb-1">
							<div className="grid grid-cols-[90px_1fr]">
								<div>
									<img src={item.img} alt={item.author}/>
								</div>
								<div className="p-8 text-xl h-full flex flex-col">
									<h4 className="mb-2 capitalize">{item.title}</h4>
									<p>Quantity: {item.cartCount}</p>
									<p className="mt-auto self-end">
										{item.price.toFixed(2)} PLN
									</p>
								</div>
							</div>
						</li>))}
				</ul>
			</section>
			<section>
				<div className="space-y-4 p-12 border-t">
					<div className="text-xl uppercase flex justify-between">
						product price
						<span className="text-left">{total.toFixed(2)} PLN</span>
					</div>
					<div className="text-xl uppercase flex justify-between">
						delivery<span className=" text-left">From 0.00 PLN</span>
					</div>
					<div className="text-xl uppercase flex justify-between ">
						<span>
							<strong>total</strong> with VAT
						</span>
						<span className="text-left font-bold text-2xl">
							{total.toFixed(2)} PLN
						</span>
					</div>
					<div className="w-full">
						<react_router_dom_1.Link to="cart" className="w-full text-2xl">
							<div className="w-full py-4 capitalize bg-[#6AD991] text-white hover:bg-[#1AD991] transition font-bold text-center">
								Cart
							</div>
						</react_router_dom_1.Link>
					</div>
				</div>
			</section>
		</div>);
};
exports.default = CartSmall;
