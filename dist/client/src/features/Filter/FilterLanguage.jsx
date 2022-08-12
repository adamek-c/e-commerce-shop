"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prefer-destructuring */
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const filterSlice_1 = require("./filterSlice");
const getUniqueValue_1 = __importDefault(require("../../helpers/getUniqueValue"));
const FilterLanguage = () => {
    const bookLanguage = (0, react_redux_1.useSelector)(filterSlice_1.bookLanguages);
    const checkedValue = (0, react_redux_1.useSelector)(filterSlice_1.checkedValues);
    const bookLang = (0, react_redux_1.useSelector)(filterSlice_1.bookLangs);
    const dispatch = (0, react_redux_1.useDispatch)();
    const categoryLanguage = bookLanguage.map((book) => book.edition);
    const sortedLanguage = (0, getUniqueValue_1.default)(categoryLanguage, "edition");
    // eslint-disable-next-line no-undef
    const handleFilterLanguage = (e) => {
        const name = e.target.name;
        const checked = e.target.checked;
        if (checked) {
            dispatch((0, filterSlice_1.filterLanguage)({
                name,
                checked,
            }));
            dispatch((0, filterSlice_1.filter)());
        }
        else {
            dispatch((0, filterSlice_1.filterLanguage)({
                name,
                checked,
            }));
        }
    };
    (0, react_1.useEffect)(() => {
        if (!checkedValue) {
            dispatch((0, filterSlice_1.filter)());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkedValue]);
    return (<div className="mt-8">
			{sortedLanguage === null || sortedLanguage === void 0 ? void 0 : sortedLanguage.map((language, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="my-5">
					<input type="checkbox" name={language} id={language} className="cursor-pointer" onChange={(e) => handleFilterLanguage(e)} checked={language === bookLang ? checkedValue : false}/>
					<label htmlFor={language} className="capitalize text-xl ml-3 cursor-pointer">
						{language}
					</label>
				</div>))}
		</div>);
};
exports.default = FilterLanguage;
