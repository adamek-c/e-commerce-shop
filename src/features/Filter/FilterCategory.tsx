import { useSelector, useDispatch } from "react-redux";
import { filterCategory, filter } from "./filterSlice";
import { allBooksStorage, bookNames } from "./filterSlice";
import getUniqueValue from "../../helpers/getUniqueValue";

const FilterCategory = () => {
	const book = useSelector(allBooksStorage);
	const bookName = useSelector(bookNames);

	const category = book.map((book) => book.category);
	const sortedCategory = getUniqueValue(category, "category");

	const dispatch = useDispatch();

	const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const category = e.currentTarget;
		dispatch(filterCategory(category.name));
		dispatch(filter());
	};

	return (
		<div className="flex flex-col justify mt-4">
			{sortedCategory?.map((category, index) => {
				return (
					<button
						key={index}
						type="button"
						className={`${
							bookName === category
								? "text-left capitalize text-xl my-2  ml-5 transition-all font-bold border-r border-[#4777A3]"
								: "text-left capitalize text-xl my-2 ml-3 hover:ml-5 transition-all"
						}`}
						name={category}
						onClick={(e) => {
							handleFilter(e);
						}}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default FilterCategory;
