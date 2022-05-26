import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { AiOutlineLeft } from "react-icons/ai";
import { Open } from "../../interfaces/ComponentsInterfaces/FilterInterfaces";
import { allBooks } from "../../features/Filter/filterSlice";
import FilterCategory from "../../features/Filter/FilterCategory";
import FilterLanguage from "../../features/Filter/FilterLanguage";
import FilterPrice from "../../features/Filter/FilterPrice";

const Filter: FC<Open> = ({ open, width }) => {
	const active = useSelector((state: RootState) => state.filter.active);
	const dispatch = useDispatch();
	const handleGiveBooks = () => {
		dispatch(allBooks());
	};

	if (width < 1024) {
		return (
			<section>
				{open && (
					<div className="absolute bg-white w-full z-10 pb-6">
						<h2 className="mt-8 text-2xl" onClick={handleGiveBooks}>
							Język
						</h2>
						<FilterLanguage />
						<h2 className="mt-8 text-2xl" onClick={handleGiveBooks}>
							{active ? (
								<span className="flex items-center cursor-pointer">
									<AiOutlineLeft className="text-2xl" /> Ksiażki
								</span>
							) : (
								"Książki"
							)}
						</h2>
						<FilterCategory />
						<h2 className="mt-8 text-2xl" onClick={handleGiveBooks}>
							Cena
						</h2>
						<FilterPrice />
					</div>
				)}
			</section>
		);
	}

	return (
		<section>
			<div>
				<h2 className="mt-8 text-2xl" onClick={handleGiveBooks}>
					Język
				</h2>
				<FilterLanguage />
				<h2 className="mt-8 text-2xl" onClick={handleGiveBooks}>
					{active ? (
						<span className="flex items-center cursor-pointer">
							<AiOutlineLeft className="text-2xl" /> Ksiażki
						</span>
					) : (
						"Książki"
					)}
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
