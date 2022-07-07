import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import CartItems from "../features/Cart/CartItems";
import { calculateTotals } from "../features/Cart/cartSlice";

const Cart = () => {
	const products = useSelector((state: RootState) => state.cart.cart);
	const total = useSelector((state: RootState) => state.cart.total);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(calculateTotals());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [products]);

	if (products.length === 0) {
		return (
			<h2 className="mt-12 text-center text-2xl min-h-screen">
				Brak Produktów
			</h2>
		);
	}

	return (
		<section>
			<div className="m-12 max-w-screen-2xl mx-auto px-8 lg:mt-32 min-h-screen">
				<div className="grid">
					{products.map((product) => (
						<CartItems key={product.Ids} {...product} />
					))}
				</div>
				<div className="my-8">
					<h2 className="text-3xl">
						Razem :{" "}
						<span className="font-bold ml-4">{total.toFixed(2)} PLN</span>
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Cart;
