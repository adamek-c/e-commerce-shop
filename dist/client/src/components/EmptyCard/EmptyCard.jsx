"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const shopping_png_1 = __importDefault(require("../../assets/shopping.png"));
const EmptyCard = () => (<div className="flex flex-1 max-w-screen-xl mx-auto w-full flex-col lg:flex-row lg:space-x-40 py-20">
		<div className="6/12 mt-12">
			<img src={shopping_png_1.default} alt="shopping illustraction" className=" sm:w-6/12 lg:w-auto mx-auto"/>
		</div>
		<div className="mt-28 lg:mt-52 text-center lg:text-left pr-4">
			<h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold">
				There are no products in the basket
			</h2>
			<p className="mt-8 text-3xl lg:text-4xl">
				To return to the home page, please click the link below
			</p>
			<button type="button" className="mt-16 group">
				<react_router_dom_1.Link to="/" className="text-4xl lg:text-4xl border py-5 px-16  bg-[#6AD991] text-white transition flex items-center group-hover:drop-shadow-lg">
					Home
					<span className="material-symbols-outlined ml-3">arrow_forward</span>
				</react_router_dom_1.Link>
			</button>
		</div>
	</div>);
exports.default = EmptyCard;
