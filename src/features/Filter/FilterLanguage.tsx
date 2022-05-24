import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";

import { filterLanguage, chcekedValue } from "./filterSlice";

const FilterLanguage = () => {
	const bookLanguage = useSelector(
		(state: RootState) => state.filter.all_items
	);
	const dispatch = useDispatch();
	const category = bookLanguage.map((book) => book.edition);
	const booksLanguage = new Set(category);
	const sortedLanguage = Array.from(booksLanguage).sort();

	const handleFilterLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const checked = e.target.checked;

		if (checked) {
			dispatch(filterLanguage({ name, checked }));
		} else {
			dispatch(chcekedValue());
			dispatch(filterLanguage({ checked }));
		}
	};

	return (
		<div className="mt-4">
			{sortedLanguage.map((language, index) => {
				return (
					<div key={index} className="my-2">
						<input
							type="checkbox"
							name={language}
							id={language}
							className="cursor-pointer"
							onChange={(e) => handleFilterLanguage(e)}
						/>
						<label
							htmlFor={language}
							className="capitalize text-xl my-2 ml-3 cursor-pointer"
						>
							{language}
						</label>
					</div>
				);
			})}
		</div>
	);
};

export default FilterLanguage;
