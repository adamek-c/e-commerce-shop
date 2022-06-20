import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterLanguage, filter } from "./filterSlice";
import { bookLanguages, checkedValues, bookLangs } from "./filterSlice";

const FilterLanguage = () => {
	const bookLanguage = useSelector(bookLanguages);
	const checkedValue = useSelector(checkedValues);
	const bookLang = useSelector(bookLangs);
	const dispatch = useDispatch();

	const categoryLanguage = bookLanguage.map((book) => book.edition);
	const booksLanguage = new Set(categoryLanguage);
	const sortedLanguage = Array.from(booksLanguage).sort();

	const handleFilterLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const checked = e.target.checked;

		if (checked) {
			dispatch(filterLanguage({ name, checked }));
			dispatch(filter());
		} else {
			dispatch(filterLanguage({ name, checked }));
		}
	};

	useEffect(() => {
		if (!checkedValue) {
			dispatch(filter());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [checkedValue]);

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
							checked={language === bookLang ? checkedValue : false}
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
