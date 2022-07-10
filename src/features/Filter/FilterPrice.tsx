/* eslint-disable prefer-destructuring */
import { useEffect, ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	filterPrice,
	filter,
	minPrices,
	maxPrices,
	checkedPrice,
} from "./filterSlice";
import inputs from "../../data/inputs";

const FilterPrice = () => {
	const dispatch = useDispatch();
	const minPriceValue = useSelector(minPrices);
	const maxPriceValue = useSelector(maxPrices);
	const isChecked = useSelector(checkedPrice);

	const handleFilterPrice: ChangeEventHandler<HTMLInputElement> = (e) => {
		const minPrice = parseInt(e.target.min);
		const maxPrice = parseInt(e.target.max);
		const checked = e.target.checked;

		if (checked) {
			dispatch(
				filterPrice({
					minPrice,
					maxPrice,
					checked,
				}),
			);
			dispatch(filter());
		} else {
			dispatch(
				filterPrice({
					minPrice,
					maxPrice,
					checked,
				}),
			);
		}
	};

	useEffect(() => {
		if (!isChecked) {
			dispatch(filter());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isChecked]);

	return (
		<div className="mt-8">
			{inputs.map((input) => {
				const { id, name, from, to } = input;
				return (
					<div key={id} className="my-5">
						<input
							type="checkbox"
							name={name}
							id={name}
							min={from}
							max={to}
							className="cursor-pointer"
							onChange={(e) => handleFilterPrice(e)}
							checked={
								minPriceValue === from && maxPriceValue === to
									? isChecked
									: false
							}
						/>
						<label htmlFor={name} className="text-xl my-2 ml-3 cursor-pointer">
							{from === 1 ? null : `${from}`} {from === 125 ? null : "Do "}
							{to === 999 ? "i więcej" : `${to} zł`}
						</label>
					</div>
				);
			})}
		</div>
	);
};

export default FilterPrice;
