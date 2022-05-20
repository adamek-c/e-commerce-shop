import { Filter } from "../components";
import { MdOutlineExpandMore } from "react-icons/md";
// components
import { Books } from "../components";

import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Home = () => {
	const books = useSelector((state: RootState) => state.filter.items);

	return (
		<main className="mt-12 relative overflow-hidden">
			<div className="px-8 lg:flex lg:justify-items-start justify-between max-w-screen-2xl mx-auto">
				<div>
					<h2 className="text-3xl tracking-wider flex items-center cursor-pointer lg:cursor-auto w-max">
						Kategoria
						<span className="ml-2 lg:hidden">
							<MdOutlineExpandMore />
						</span>
					</h2>
					<Filter />
				</div>
				<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-items-center my-12">
					{books.map((book) => {
						return <Books key={book.id} {...book} />;
					})}
				</div>
			</div>
		</main>
	);
};

export default Home;
