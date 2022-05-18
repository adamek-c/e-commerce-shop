import FilterCategory from "./FilterCategory";
import FilterLanguage from "./FilterLanguage";
import { allBooks } from "../../features/Filter/filterSlice";
import { useDispatch } from "react-redux";

const Filter = () => {
	const dispatch = useDispatch();

	return (
		<section>
			<div>
				<FilterLanguage />
				<h2 className="mt-8 text-2xl" onClick={() => dispatch(allBooks())}>
					Książki
				</h2>
				<FilterCategory />
			</div>
		</section>
	);
};

export default Filter;

// className={`absolute -top-full transition-all`}
