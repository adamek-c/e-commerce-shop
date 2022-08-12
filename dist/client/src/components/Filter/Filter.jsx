"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const ai_1 = require("react-icons/ai");
const filterSlice_1 = require("../../features/Filter/filterSlice");
const FilterCategory_1 = __importDefault(require("../../features/Filter/FilterCategory"));
const FilterLanguage_1 = __importDefault(require("../../features/Filter/FilterLanguage"));
const FilterPrice_1 = __importDefault(require("../../features/Filter/FilterPrice"));
const FilterSmall_1 = __importDefault(require("./FilterSmall"));
const Filter = ({ open, width }) => {
    const { active } = (0, react_redux_1.useSelector)((state) => state.filter.filter);
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleGiveBooks = () => {
        dispatch((0, filterSlice_1.allBooks)());
        dispatch((0, filterSlice_1.filter)());
    };
    if (width < 1024) {
        return <FilterSmall_1.default open={open} handleGiveBooks={handleGiveBooks}/>;
    }
    return (<section>
			<div className="w-96">
				<h2 className="mt-8 text-2xl" onClick={handleGiveBooks} aria-hidden="true">
					Language
				</h2>
				<FilterLanguage_1.default />
				<h2 className="mt-8 text-2xl" onClick={handleGiveBooks} aria-hidden="true">
					{active ? (<span className="flex items-center cursor-pointer text-2xl">
							<ai_1.AiOutlineLeft className="text-2xl"/>
							<span>Books</span>
						</span>) : (<p className="text-2xl">Books</p>)}
				</h2>
				<FilterCategory_1.default />
				<h2 className="mt-8 text-2xl" onClick={handleGiveBooks} aria-hidden="true">
					Price
				</h2>
				<FilterPrice_1.default />
			</div>
		</section>);
};
exports.default = Filter;
