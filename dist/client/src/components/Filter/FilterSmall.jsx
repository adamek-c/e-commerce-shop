"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const FilterCategory_1 = __importDefault(require("../../features/Filter/FilterCategory"));
const FilterLanguage_1 = __importDefault(require("../../features/Filter/FilterLanguage"));
const FilterPrice_1 = __importDefault(require("../../features/Filter/FilterPrice"));
const FilterSmall = ({ open, handleGiveBooks }) => {
    const [language, setLanguage] = (0, react_1.useState)();
    const [category, setCategory] = (0, react_1.useState)();
    const [price, setPrice] = (0, react_1.useState)();
    return (<section>
			{open && (<div className="absolute top-30 left-0 right-0 bg-white w-full pb-20 space-y-10 z-50">
					<div className="flex items-center justify-between mt-8">
						<h3 className="text-2xl">Language</h3>
						<button type="button" onClick={() => setLanguage(!language)}>
							{language ? (<span className="material-symbols-outlined ml-0">remove</span>) : (<span className="material-symbols-outlined ml-0">add</span>)}
						</button>
					</div>
					{language && <FilterLanguage_1.default />}
					<hr />
					<h2 className="mt-8 text-2xl flex items-center justify-between" aria-hidden="true">
						<button type="button" onClick={handleGiveBooks} className="font-medium">
							Category
						</button>
						<button type="button" onClick={() => setCategory(!category)}>
							{category ? (<span className="material-symbols-outlined">remove</span>) : (<span className="material-symbols-outlined">add</span>)}
						</button>
					</h2>
					{category && <FilterCategory_1.default />}
					<hr />
					<div className="flex items-center justify-between ">
						<h3 className=" text-2xl transition w-full">Price</h3>
						<button type="button" onClick={() => setPrice(!price)}>
							{price ? (<span className="material-symbols-outlined">remove</span>) : (<span className="material-symbols-outlined">add</span>)}
						</button>
					</div>
					{price && <FilterPrice_1.default />}
				</div>)}
		</section>);
};
exports.default = FilterSmall;
