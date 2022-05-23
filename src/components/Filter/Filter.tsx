import FilterCategory from "./FilterCategory";
import FilterLanguage from "./FilterLanguage";
import FilterPrice from "./FilterPrice";

import { allBooks } from "../../features/Filter/filterSlice";
import { useDispatch } from "react-redux";

const Filter = () => {
	const dispatch = useDispatch();

	const handleGiveBooks = () => {
		dispatch(allBooks());
	};

	return (
		<section>
			<div>
				<h2 className="mt-8 text-2xl" onClick={handleGiveBooks}>
					Język
				</h2>
				<FilterLanguage />
				<h2 className="mt-8 text-2xl" onClick={handleGiveBooks}>
					Książki
				</h2>
				<FilterCategory />
				<h2 className="mt-8 text-2xl" onClick={handleGiveBooks}>
					Cena
				</h2>
				<FilterPrice />
			</div>
		</section>
	);
};

export default Filter;

// className={`absolute -top-full transition-all`}
