import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { MdOutlineExpandMore } from "react-icons/md";
import { Books } from "../components";
import { Filter } from "../components";

const Home = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [width, setWidth] = useState<number>(window.innerWidth);

	const books = useSelector((state: RootState) => state.filter.items);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	return (
		<main className="mt-12 relative overflow-hidden">
			<div className="px-8 lg:flex lg:justify-items-start justify-between max-w-screen-xl mx-auto">
				<div>
					<h2
						className="text-3xl tracking-wider flex items-center cursor-pointer lg:cursor-auto w-max"
						onClick={() => setOpen(!open)}
					>
						Kategoria
						<span className="ml-2 lg:hidden">
							<MdOutlineExpandMore />
						</span>
					</h2>
					<Filter open={open} width={width} />
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
