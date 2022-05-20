import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";

const FilterLanguage = () => {
	const bookLanguage = useSelector(
		(state: RootState) => state.filter.all_items
	);
	const category = bookLanguage.map((book) => book.edition);
	const booksLenguage = new Set(category);
	const sortedLenguage = Array.from(booksLenguage).sort();

	const dispatch = useDispatch();

	return (
		<div className="mt-4">
			{sortedLenguage.map((lenguage, index) => {
				return (
					<div key={index} className="my-2">
						<input
							type="checkbox"
							name={lenguage}
							id={lenguage}
							className="cursor-pointer"
						/>
						<label
							htmlFor={lenguage}
							className="capitalize text-xl my-2 ml-3 cursor-pointer"
						>
							{lenguage}
						</label>
					</div>
				);
			})}
		</div>
	);
};

export default FilterLanguage;
