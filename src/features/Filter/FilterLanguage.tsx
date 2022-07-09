/* eslint-disable prefer-destructuring */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	filterLanguage,
	filter,
	bookLanguages,
	checkedValues,
	bookLangs,
} from "./filterSlice";
import getUniqueValue from "../../helpers/getUniqueValue";

const FilterLanguage = () => {
	const bookLanguage = useSelector(bookLanguages);
	const checkedValue = useSelector(checkedValues);
	const bookLang = useSelector(bookLangs);
	const dispatch = useDispatch();

	const categoryLanguage = bookLanguage.map((book) => book.edition);
	const sortedLanguage = getUniqueValue(categoryLanguage, "edition");

	// eslint-disable-next-line no-undef
	const handleFilterLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const checked = e.target.checked;

		if (checked) {
			dispatch(
				filterLanguage({
					name,
					checked,
				}),
			);
			dispatch(filter());
		} else {
			dispatch(
				filterLanguage({
					name,
					checked,
				}),
			);
		}
	};

	useEffect(() => {
		if (!checkedValue) {
			dispatch(filter());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [checkedValue]);

	return (
		<div className="mt-8">
			{sortedLanguage?.map((language, index) => (
				// eslint-disable-next-line react/no-array-index-key
				<div key={index} className="my-5">
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
						className="capitalize text-2xl ml-3 cursor-pointer"
					>
						{language}
					</label>
				</div>
			))}
		</div>
	);
};

export default FilterLanguage;
