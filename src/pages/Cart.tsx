import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { Container, EmptyCard } from "../components";
import CartItems from "../features/Cart/CartItems";
import { calculateTotals } from "../features/Cart/cartSlice";

const Cart = () => {
	const products = useSelector((state: RootState) => state.cart.cart);
	const { total } = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(calculateTotals());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [products]);

	if (products.length === 0) return <EmptyCard />;

	return (
		<section>
			<Container>
				<div className="flex flex-col lg:flex-row justify-betwee gap-10 ">
					<div className="lg:flex-grow">
						{products.map((product) => (
							<CartItems key={product.Ids} {...product} />
						))}
					</div>
					<div className="lg:flex-grow xl:flex-1 space-y-10 flex-wrap bg-[#F2F2F2] p-6 sm:p-16 lg:min-h-screen">
						<span className="text-xl uppercase flex justify-between">
							product price
							<span className="text-left">{total.toFixed(2)} PLN</span>
						</span>
						<span className="text-xl uppercase flex justify-between">
							delivery<span className=" text-left">From 0,00 PLN</span>
						</span>
						<hr />
						<span className="text-xl uppercase flex justify-between">
							<span>
								<strong>total</strong> with VAT
							</span>
							<span className="text-left font-bold text-2xl">
								{total.toFixed(2)} PLN
							</span>
						</span>
						<button
							type="button"
							className="w-full bg-[#6AD991] text-3xl py-5 text-white font-bold hover:bg-[#1AD991] transition"
						>
							Pay
						</button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Cart;
