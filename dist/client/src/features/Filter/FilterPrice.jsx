"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prefer-destructuring */
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const filterSlice_1 = require("./filterSlice");
const inputs_1 = __importDefault(require("../../data/inputs"));
const FilterPrice = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const minPriceValue = (0, react_redux_1.useSelector)(filterSlice_1.minPrices);
    const maxPriceValue = (0, react_redux_1.useSelector)(filterSlice_1.maxPrices);
    const isChecked = (0, react_redux_1.useSelector)(filterSlice_1.checkedPrice);
    const handleFilterPrice = (e) => {
        const minPrice = parseInt(e.target.min);
        const maxPrice = parseInt(e.target.max);
        const checked = e.target.checked;
        if (checked) {
            dispatch((0, filterSlice_1.filterPrice)({
                minPrice,
                maxPrice,
                checked,
            }));
            dispatch((0, filterSlice_1.filter)());
        }
        else {
            dispatch((0, filterSlice_1.filterPrice)({
                minPrice,
                maxPrice,
                checked,
            }));
        }
    };
    (0, react_1.useEffect)(() => {
        if (!isChecked) {
            dispatch((0, filterSlice_1.filter)());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChecked]);
    return (<div className="mt-8">
			{inputs_1.default.map((input) => {
            const { id, name, from, to } = input;
            return (<div key={id} className="my-5">
						<input type="checkbox" name={name} id={name} min={from} max={to} className="cursor-pointer" onChange={(e) => handleFilterPrice(e)} checked={minPriceValue === from && maxPriceValue === to
                    ? isChecked
                    : false}/>
						<label htmlFor={name} className="text-xl my-2 ml-3 cursor-pointer">
							{from === 1 ? null : `${from}`} {from === 125 ? null : "Do "}
							{to === 999 ? "i więcej" : `${to} zł`}
						</label>
					</div>);
        })}
		</div>);
};
exports.default = FilterPrice;
