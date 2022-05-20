import { useSelector, useDispatch } from "react-redux";

const FilterPrice = () => {
	const dispatch = useDispatch();

	return (
		<div className="mt-4">
			<div className="my-2">
				<input
					type="checkbox"
					name="price-fifteen"
					id="price-fifteen"
					min="0"
					max="15"
					className="cursor-pointer"
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
					name="price-twenty-five"
					id="price-twenty-five"
					min="100"
					max="125"
					className="cursor-pointer"
				/>
				<label
					htmlFor="price-twenty-five"
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
					className="cursor-pointer"
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
