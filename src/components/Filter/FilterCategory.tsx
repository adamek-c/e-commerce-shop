import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";

import { filterCategory } from "../../features/Filter/filterSlice";

const FilterCategory = () => {
	const book = useSelector((state: RootState) => state.filter.all_items);
	const category = book.map((book) => book.category);
	const booksCategory = new Set(category);
	const sortedCategory = Array.from(booksCategory).sort();

	const dispatch = useDispatch();

	const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const category = e.currentTarget;
		dispatch(filterCategory(category.name));
	};

	return (
		<div className="flex flex-col justify mt-4">
			{sortedCategory.map((category, index) => {
				return (
					<button
						key={index}
						type="button"
						className="text-left capitalize text-xl my-2 ml-3 hover:ml-5 transition-all"
						name={category}
						onClick={(e) => handleFilter(e)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default FilterCategory;
