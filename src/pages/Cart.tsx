import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import CartItems from "../features/Cart/CartItems";
// import { calculateTotals } from "../features/Cart/cartSlice";

const Cart = () => {
	const products = useSelector((state: RootState) => state.cart.cart);
	const cartItem = useSelector((state: RootState) => state.cart.cart);
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(calculateTotals());
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [cartItem]);

	if (products.length === 0) {
		return <h2 className="mt-12 text-center text-2xl">Brak Produktów</h2>;
	}

	return (
		<section>
			<div className="m-12 max-w-screen-2xl mx-auto px-8 lg:mt-32">
				<div className="grid">
					{products.map((product) => {
						return <CartItems key={product.Ids} {...product} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Cart;
