import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { Alert, Container, StarsRating } from "../components";
import Error from "./Error";
import { calculateTotals, addToCart } from "../features/Cart/cartSlice";

const SingleBook = () => {
	const [alert, setAlert] = useState<boolean>(false);

	const { id } = useParams();
	const books = useSelector((state: RootState) => state.filter.items);
	const products = useSelector((state: RootState) => state.cart.cart);
	const product = books.find((book) => book.id === id);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [products]);

	const handleAlert = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setAlert(!alert);
	};

	if (!product?.id) {
		return <Error />;
	}

	const { id: Id, author, img, title, price, cartCount } = product;
	const Ids = parseInt(Id);

	return (
		<section>
			<Container>
				<div className="max-w-2xl mx-auto lg:max-w-screen-xl lg:grid lg:grid-cols-2 lg:grid-rows-2 pt-10 pb-40 lg:py-20">
					<div className="lg:mt-7">
						<div className="mb-2">
							<h2 className="text-2xl tracking-wide font-bold lg:text-4xl">
								<span className="capitalize">{product?.title}</span> -{" "}
								{product?.released}
							</h2>
						</div>
						<h2 className="text-xl tracking-wide lg:text-xl">
							{product?.author} (Autor)
						</h2>
						<StarsRating rated={product?.rated} />
						<h3 className="text-xl tracking-wide my-px lg:text-xl lg:my-1">
							Wydanie: {product?.edition}
						</h3>
						<h3 className="text-xl tracking-wide mb-2 lg:text-xl">
							Kategoria: <span className="capitalize">{product?.category}</span>
						</h3>
						<p className="text-xl tracking-wide py-4 mt-2 lg:text-xl lg:mt-4">
							{product?.description}
						</p>
					</div>
					<div className="mx-auto mt-8 mb-10 lg:row-span-2 lg:col-start-1 lg:col-end-2 lg:order-first lg:max-w-lg">
						<img
							src={product?.img}
							alt={product?.title}
							className="w-full block"
						/>
					</div>
					<div className="mt-10">
						<h3 className="text-2xl lg:text-3xl">
							{product?.price.toFixed(2)} PLN
						</h3>
						<div className="flex lg:space-x-10 flex-col lg:flex-row max-w-max">
							<button
								type="button"
								disabled={alert}
								className={`${
									alert && "cursor-wait"
								} bg-[#6AD991] py-4 px-6 text-3xl text-white hover:drop-shadow-lg mt-10 transition-all flex  space-x-2 capitalize`}
								onClick={(e) => {
									dispatch(
										addToCart({
											Ids,
											author,
											img,
											title,
											price,
											cartCount,
										}),
									);
									handleAlert(e);
								}}
							>
								<span>add to cart</span>
								<span className="material-symbols-outlined">
									add_shopping_cart
								</span>
							</button>
							{alert && <Alert setAlert={setAlert} />}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default SingleBook;
