"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const filterSlice_1 = require("./filterSlice");
const getUniqueValue_1 = __importDefault(require("../../helpers/getUniqueValue"));
const FilterCategory = () => {
    const book = (0, react_redux_1.useSelector)(filterSlice_1.allBooksStorage);
    const bookName = (0, react_redux_1.useSelector)(filterSlice_1.bookNames);
    const category = book.map((item) => item.category);
    const sortedCategory = (0, getUniqueValue_1.default)(category, "category");
    const dispatch = (0, react_redux_1.useDispatch)();
    // eslint-disable-next-line no-undef
    const handleFilter = (e) => {
        e.preventDefault();
        const categoryValue = e.currentTarget;
        dispatch((0, filterSlice_1.filterCategory)(categoryValue.name));
        dispatch((0, filterSlice_1.filter)());
    };
    return (<div className="flex flex-col justify mt-2">
			{sortedCategory === null || sortedCategory === void 0 ? void 0 : sortedCategory.map((item, index) => (<button 
        // eslint-disable-next-line react/no-array-index-key
        key={index} type="button" className={`${bookName === item
                ? "text-left capitalize text-xl mt-5 ml-5 transition-all font-bold"
                : "text-left capitalize text-xl mt-5 ml-3 hover:ml-5 transition-all font-medium"}`} name={item} onClick={(e) => {
                handleFilter(e);
            }}>
					{item}
				</button>))}
		</div>);
};
exports.default = FilterCategory;
