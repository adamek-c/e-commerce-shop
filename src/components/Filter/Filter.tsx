import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineLeft } from "react-icons/ai";
import { RootState } from "../../app/store";
import { Open } from "../../interfaces/ComponentsInterfaces/FilterInterfaces";
import { allBooks, filter } from "../../features/Filter/filterSlice";
import FilterCategory from "../../features/Filter/FilterCategory";
import FilterLanguage from "../../features/Filter/FilterLanguage";
import FilterPrice from "../../features/Filter/FilterPrice";
import FilterSmall from "./FilterSmall";

const Filter: FC<Open> = ({ open, width }) => {
	const { active } = useSelector((state: RootState) => state.filter.filter);
	const dispatch = useDispatch();

	const handleGiveBooks = () => {
		dispatch(allBooks());
		dispatch(filter());
	};

	if (width < 1024) {
		return (
			<FilterSmall
				open={open}
				active={active}
				handleGiveBooks={handleGiveBooks}
			/>
		);
	}

	return (
		<section>
			<div className="w-96">
				<h2
					className="mt-8 text-2xl"
					onClick={handleGiveBooks}
					aria-hidden="true"
				>
					Language
				</h2>
				<FilterLanguage />
				<h2
					className="mt-8 text-2xl"
					onClick={handleGiveBooks}
					aria-hidden="true"
				>
					{active ? (
						<span className="flex items-center cursor-pointer text-2xl">
							<AiOutlineLeft className="text-2xl" />
							<span>Books</span>
						</span>
					) : (
						<p className="text-2xl">Books</p>
					)}
				</h2>
				<FilterCategory />
				<h2
					className="mt-8 text-2xl"
					onClick={handleGiveBooks}
					aria-hidden="true"
				>
					Price
				</h2>
				<FilterPrice />
			</div>
		</section>
	);
};

export default Filter;
