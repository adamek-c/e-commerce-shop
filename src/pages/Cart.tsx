import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CartItems from "../features/Cart/CartItems";

const Cart = () => {
	const products = useSelector((state: RootState) => state.cart.cart);

	if (products.length === 0) {
		return <h2 className="mt-12 text-center text-2xl">Brak Produktów</h2>;
	}

	return (
		<section>
			<div className="mt-12 max-w-screen-2xl mx-auto px-8 lg:mt-32">
				<div className="p-8 shadow-md"></div>
			</div>
		</section>
	);
};

export default Cart;
