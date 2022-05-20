import FilterCategory from "./FilterCategory";
import FilterLanguage from "./FilterLanguage";
import { allBooks } from "../../features/Filter/filterSlice";
import { useDispatch } from "react-redux";
import FilterPrice from "./FilterPrice";

const Filter = () => {
	const dispatch = useDispatch();

	return (
		<section>
			<div>
				<h2 className="mt-8 text-2xl" onClick={() => dispatch(allBooks())}>
					Język
				</h2>
				<FilterLanguage />
				<h2 className="mt-8 text-2xl" onClick={() => dispatch(allBooks())}>
					Książki
				</h2>
				<FilterCategory />
				<h2 className="mt-8 text-2xl" onClick={() => dispatch(allBooks())}>
					Cena
				</h2>
				<FilterPrice />
			</div>
		</section>
	);
};

export default Filter;

// className={`absolute -top-full transition-all`}
