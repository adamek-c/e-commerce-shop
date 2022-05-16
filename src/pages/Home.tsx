import { Filter } from "../components";
import { MdOutlineExpandMore } from "react-icons/md";
// components
import { Books } from "../components";

const Home = () => {
	return (
		<main className="mt-12 relative overflow-hidden">
			<div className="px-8 lg:flex lg:justify-items-start justify-between max-w-screen-xl mx-auto">
				<div>
					<h2 className="text-3xl tracking-wider flex items-center cursor-pointer lg:cursor-auto w-max">
						Książki
						<span className="ml-2 lg:hidden">
							<MdOutlineExpandMore />
						</span>
					</h2>
					<Filter />
				</div>
				<Books />
			</div>
		</main>
	);
};

export default Home;
