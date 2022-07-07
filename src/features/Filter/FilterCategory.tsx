/* eslint-disable prettier/prettier */
import { useSelector, useDispatch } from "react-redux";
import {
	filterCategory,
	filter,
	allBooksStorage,
	bookNames,
} from "./filterSlice";
import getUniqueValue from "../../helpers/getUniqueValue";

const FilterCategory = () => {
	const book = useSelector(allBooksStorage);
	const bookName = useSelector(bookNames);

	const category = book.map((item) => item.category);
	const sortedCategory = getUniqueValue(category, "category");

	const dispatch = useDispatch();

	// eslint-disable-next-line no-undef
	const handleFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const categoryValue = e.currentTarget;
		dispatch(filterCategory(categoryValue.name));
		dispatch(filter());
	};

	return (
		<div className="flex flex-col justify mt-4">
			{sortedCategory?.map((item, index) => (
				<button
					// eslint-disable-next-line react/no-array-index-key
					key={index}
					type="button"
					className={`${
						bookName === item
							? "text-left capitalize text-xl my-2  ml-5 transition-all font-bold border-r border-[#4777A3]"
							: "text-left capitalize text-xl my-2 ml-3 hover:ml-5 transition-all"
					}`}
					name={item}
					onClick={(e) => {
						handleFilter(e);
					}}
				>
					{item}
				</button>
			))}
		</div>
	);
};

export default FilterCategory;
