import { useState } from "react";
import FilterCategory from "../../features/Filter/FilterCategory";
import FilterLanguage from "../../features/Filter/FilterLanguage";
import FilterPrice from "../../features/Filter/FilterPrice";

interface Props {
	open: boolean;
	handleGiveBooks: () => void;
}

const FilterSmall = ({ open, handleGiveBooks }: Props) => {
	const [language, setLanguage] = useState<boolean>();
	const [category, setCategory] = useState<boolean>();
	const [price, setPrice] = useState<boolean>();

	return (
		<section>
			{open && (
				<div className="absolute top-30 left-0 right-0 bg-white w-full pb-20 space-y-10 z-50">
					<button
						type="button"
						className="mt-8 text-2xl flex items-center justify-between"
						onClick={() => setLanguage(!language)}
					>
						Language
						{language ? (
							<span className="material-symbols-outlined">remove</span>
						) : (
							<span className="material-symbols-outlined">add</span>
						)}
					</button>
					{language && <FilterLanguage />}
					<hr />
					<h2
						className="mt-8 text-2xl flex items-center justify-between"
						aria-hidden="true"
					>
						<button
							type="button"
							onClick={handleGiveBooks}
							className="font-medium"
						>
							Category
						</button>
						<button type="button" onClick={() => setCategory(!category)}>
							{category ? (
								<span className="material-symbols-outlined">remove</span>
							) : (
								<span className="material-symbols-outlined">add</span>
							)}
						</button>
					</h2>
					{category && <FilterCategory />}
					<hr />
					<button
						type="button"
						className="mt-8 text-2xl flex items-center justify-between transition"
						onClick={() => setPrice(!price)}
					>
						Price
						{price ? (
							<span className="material-symbols-outlined">remove</span>
						) : (
							<span className="material-symbols-outlined">add</span>
						)}
					</button>
					{price && <FilterPrice />}
				</div>
			)}
		</section>
	);
};

export default FilterSmall;
