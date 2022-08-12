"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const components_1 = require("../components");
const CartItems_1 = __importDefault(require("../features/Cart/CartItems"));
const cartSlice_1 = require("../features/Cart/cartSlice");
const Cart = () => {
    const products = (0, react_redux_1.useSelector)((state) => state.cart.cart);
    const { total } = (0, react_redux_1.useSelector)((state) => state.cart);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((0, cartSlice_1.calculateTotals)());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);
    if (products.length === 0)
        return <components_1.EmptyCard />;
    return (<section>
			<components_1.Container>
				<div className="flex flex-col lg:flex-row justify-betwee gap-10 ">
					<div className="lg:flex-grow">
						{products.map((product) => (<CartItems_1.default key={product.Ids} {...product}/>))}
					</div>
					<div className="lg:flex-grow xl:flex-1 space-y-10 flex-wrap bg-[#F2F2F2] p-6 sm:p-16 lg:min-h-screen">
						<span className="text-xl uppercase flex justify-between">
							product price
							<span className="text-left">{total.toFixed(2)} PLN</span>
						</span>
						<span className="text-xl uppercase flex justify-between">
							delivery<span className=" text-left">From 0,00 PLN</span>
						</span>
						<hr />
						<span className="text-xl uppercase flex justify-between">
							<span>
								<strong>total</strong> with VAT
							</span>
							<span className="text-left font-bold text-2xl">
								{total.toFixed(2)} PLN
							</span>
						</span>
						<button type="button" className="w-full bg-[#6AD991] text-3xl py-5 text-white font-bold hover:bg-[#1AD991] transition">
							Pay
						</button>
					</div>
				</div>
			</components_1.Container>
		</section>);
};
exports.default = Cart;
