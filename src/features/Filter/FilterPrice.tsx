import { ChangeEventHandler } from "react";
import { useDispatch } from "react-redux";
import { filterPrice } from "./filterSlice";

const FilterPrice = () => {
	const dispatch = useDispatch();

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
				<input
					type="checkbox"
					name="price-fifteen"
					id="price-fifteen"
					min="1"
					max="15"
					className="cursor-pointer"
					onChange={(e) => handleFilterPrice(e)}
				/>
				<label
					htmlFor="price-fifteen"
					className="capitalize text-xl my-2 ml-3 cursor-pointer"
				>
					Do 15 zł
				</label>
			</div>
			<div className="my-2">
				<input
					type="checkbox"
					name="price-fifty"
					id="price-fifty"
					min="15"
					max="50"
					className="cursor-pointer"
					onChange={(e) => handleFilterPrice(e)}
				/>
				<label
					htmlFor="price-fifty"
					className="capitalize text-xl my-2 ml-3 cursor-pointer"
				>
					15 do 50 zł
				</label>
			</div>
			<div className="my-2">
				<input
					type="checkbox"
					name="price-hundred"
					id="price-hundred"
					min="50"
					max="100"
					className="cursor-pointer"
					onChange={(e) => handleFilterPrice(e)}
				/>
				<label
					htmlFor="price-hundred"
					className="capitalize text-xl my-2 ml-3 cursor-pointer"
				>
					50 do 100 zł
				</label>
			</div>
			<div className="my-2">
				<input
					type="checkbox"
					name="price-houndred"
					id="price-houndred"
					min="100"
					max="125"
					className="cursor-pointer"
					onChange={(e) => handleFilterPrice(e)}
				/>
				<label
					htmlFor="price-houndred"
					className="capitalize text-xl my-2 ml-3 cursor-pointer"
				>
					100 do 125 zł
				</label>
			</div>
			<div>
				<input
					type="checkbox"
					name="price-twenty-five"
					id="price-twenty-five"
					min="100"
					max="9999"
					className="cursor-pointer"
					onChange={(e) => handleFilterPrice(e)}
				/>
				<label
					htmlFor="price-twenty-five"
					className="capitalize text-xl my-2 ml-3 cursor-pointer"
				>
					125 i więcej
				</label>
			</div>
		</div>
	);
};

export default FilterPrice;
