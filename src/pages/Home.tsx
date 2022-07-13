/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineExpandMore } from "react-icons/md";
import { AppDispatch, RootState } from "../app/store";
import { Books, ErrorBoundary, Filter, Loading } from "../components";
import { getBooks } from "../features/Filter/filterSlice";

const Home = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [width, setWidth] = useState<number>(window.innerWidth);

	const dispatch = useDispatch<AppDispatch>();

	const books = useSelector((state: RootState) => state.filter.items);
	const { pending } = useSelector((state: RootState) => state.filter);
	const { error } = useSelector((state: RootState) => state.filter);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	useEffect(() => {
		if (pending === "idle") {
			dispatch(getBooks());
		}
	}, []);

	let content;

	if (pending === "loading") {
		content = <Loading />;
	}

	if (pending === "succeeded") {
		content = (
			<ErrorBoundary>
				<main className="pt-20 relative overflow-hidden">
					<div className="px-8 grid lg:grid-cols-four max-w-screen-2xl mx-auto min-h-screen gap-8">
						<div>
							<h2
								className="text-3xl tracking-wider flex items-center cursor-pointer lg:cursor-auto w-max mt-12"
								onClick={() => setOpen(!open)}
								aria-hidden="true"
							>
								Category
								<span className="ml-2 lg:hidden">
									<MdOutlineExpandMore />
								</span>
							</h2>
							<Filter open={open} width={width} />
						</div>

						<div className="grid gap-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 my-12 w-full ">
							{books.map((book) => (
								<Books key={book.id} {...book} />
							))}
						</div>
					</div>
				</main>
			</ErrorBoundary>
		);
	}

	if (pending === "failed") {
		content = <h2>{error}</h2>;
	}

	return <section>{content}</section>;
};

export default Home;
