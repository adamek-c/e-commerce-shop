import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { addToCart } from "../features/Cart/cartSlice";
// components
import { StarsRating } from "../components";
import Error from "./Error";

const SingleBook = () => {
	const { id } = useParams();

	const books = useSelector((state: RootState) => state.filter.items);
	const product = books.find((book) => book.id === id);
	const dispatch = useDispatch();

	if (!product?.id) {
		return <Error />;
	}

	const { id: Id, author, img, title, price, cartCount } = product;
	const Ids = parseInt(Id);

	return (
		<section>
			<div className="mt-12 max-w-screen-2xl mx-auto px-8 lg:mt-32">
				<div className="max-w-2xl mx-auto p-8 shadow-md lg:max-w-screen-xl lg:grid lg:grid-cols-2 lg:grid-rows-2 ">
					<div className="lg:mt-7">
						<div className="mb-2">
							<h2 className="text-2xl tracking-wide lg:text-4xl">
								<span className="capitalize">{product?.title}</span> -{" "}
								{product?.released}
							</h2>
						</div>
						<h2 className="text-xl tracking-wide lg:text-2xl">
							{product?.author} (Autor)
						</h2>
						<StarsRating rated={product?.rated} />
						<h3 className="text-xl tracking-wide my-px lg:text-2xl lg:my-3">
							Wydanie: {product?.edition}
						</h3>
						<h3 className="text-xl tracking-wide mb-2 lg:text-2xl">
							Kategoria: <span className="capitalize">{product?.category}</span>
						</h3>
					</div>
					<div className="max-w-sm mx-auto mt-8 mb-10 lg:row-span-2 lg:col-start-1 lg:col-end-2 lg:order-first lg:max-w-md">
						<img
							src={product?.img}
							alt={product?.title}
							className="w-full block"
						/>
					</div>
					<div>
						<span
							className="text-2xl font-bold border border-[#4761A3] 
					py-2 px-4 text-[#4761A3] lg:text-3xl"
						>
							{product?.price} PLN
						</span>
						<p className="text-xl tracking-wide py-4 mt-2 lg:text-xl">
							{product?.description}
						</p>
						<button
							className="bg-[#4761A3] py-4 px-6 text-3xl text-white hover:bg-[#384F88] lg:mt-12"
							onClick={() =>
								dispatch(
									addToCart({ Ids, author, img, title, price, cartCount })
								)
							}
						>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleBook;
