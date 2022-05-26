import { ChangeEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { filterPrice } from "./filterSlice";
import inputs from "../../data/inputs";

const FilterPrice = () => {
	const dispatch = useDispatch();
	const minPrice = useSelector((state: RootState) => state.filter.min_price);
	const maxPrice = useSelector((state: RootState) => state.filter.max_price);
	const checked = useSelector((state: RootState) => state.filter.checkedPrice);

	const handleFilterPrice: ChangeEventHandler<HTMLInputElement> = (e) => {
		const minPrice = parseInt(e.target.min);
		const maxPrice = parseInt(e.target.max);
		const checked = e.target.checked;

		if (checked) {
			dispatch(filterPrice({ minPrice, maxPrice, checked }));
		} else {
			dispatch(filterPrice({ minPrice, maxPrice, checked }));
		}
	};

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
