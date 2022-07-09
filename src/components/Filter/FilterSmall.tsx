import { AiOutlineLeft } from "react-icons/ai";
import FilterCategory from "../../features/Filter/FilterCategory";
import FilterLanguage from "../../features/Filter/FilterLanguage";
import FilterPrice from "../../features/Filter/FilterPrice";

interface Props {
	open: boolean;
	active: boolean;
	handleGiveBooks: () => void;
}

const FilterSmall = ({ open, active, handleGiveBooks }: Props) => (
	<section>
		{open && (
			<div className="absolute bg-white w-full z-10 pb-6">
				<h2 className="mt-8 text-2xl">Język</h2>
				<FilterLanguage />
				<h2
					className="mt-8 text-2xl"
					onClick={handleGiveBooks}
					aria-hidden="true"
				>
					{active ? (
						<span className="flex items-center cursor-pointer">
							<AiOutlineLeft className="text-2xl" /> Ksiażki
						</span>
					) : (
						"Książki"
					)}
				</h2>
				<FilterCategory />
				<h2 className="mt-8 text-2xl">Cena</h2>
				<FilterPrice />
			</div>
		)}
	</section>
);

export default FilterSmall;
