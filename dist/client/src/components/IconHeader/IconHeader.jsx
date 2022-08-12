"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const prop_types_1 = __importDefault(require("prop-types"));
const IconHeader = ({ amount, icon, title, to, border }) => (<react_router_dom_1.Link to={to} className="cursor-pointer">
		<div className="relative flex items-center space-x-2 group transition">
			<span className="material-symbols-outlined text-4xl">{icon}</span>
			<span className={`${border
        ? "group-hover:border-0 text-2xl capitalize"
        : "group-hover:border-b text-2xl border-slate-900 capitalize"}`}>
				{title}
			</span>
			{amount !== 0 ? (<span className="text-2xl  group-hover:border-b border-slate-900 transition">
					({amount})
				</span>) : null}
		</div>
	</react_router_dom_1.Link>);
exports.default = IconHeader;
IconHeader.propTypes = {
    amount: prop_types_1.default.number,
};
IconHeader.defaultProps = {
    amount: 0,
};
