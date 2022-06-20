import { useEffect } from "react";
import { ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPrice, filter } from "./filterSlice";
import inputs from "../../data/inputs";
import { minPrices, maxPrices, checkedPrice } from "./filterSlice";

const FilterPrice = () => {
	const dispatch = useDispatch();
	const minPrice = useSelector(minPrices);
	const maxPrice = useSelector(maxPrices);
	const checked = useSelector(checkedPrice);

	const handleFilterPrice: ChangeEventHandler<HTMLInputElement> = (e) => {
		const minPrice = parseInt(e.target.min);
		const maxPrice = parseInt(e.target.max);
		const checked = e.target.checked;

		if (checked) {
			dispatch(filterPrice({ minPrice, maxPrice, checked }));
			dispatch(filter());
		} else {
			dispatch(filterPrice({ minPrice, maxPrice, checked }));
		}
	};

	useEffect(() => {
		if (!checked) {
			dispatch(filter());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [checked]);

	return (
		<div className="mt-4">
			<div className="my-2">
				{inputs.map((input) => {
					const { id, name, from, to } = input;
					return (
						<div key={id}>
							<input
								type="checkbox"
								name={name}
								id={name}
								min={from}
								max={to}
								className="cursor-pointer"
								onChange={(e) => handleFilterPrice(e)}
								checked={minPrice === from && maxPrice === to ? checked : false}
							/>
							<label
								htmlFor={name}
								className="text-xl my-2 ml-3 cursor-pointer"
							>
								{from === 1 ? null : `${from}`}
								{` `}
								{from === 125 ? null : "Do"} {``}
								{to === 999 ? "i więcej" : `${to} zł`}
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FilterPrice;
