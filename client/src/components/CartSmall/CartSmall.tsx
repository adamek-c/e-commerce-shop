import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const CartSmall = () => {
	const products = useSelector((state: RootState) => state.cart.cart);
	const { total } = useSelector((state: RootState) => state.cart);
	return (
		<div className="absolute hidden group-hover:lg:block top-[30px] bg-white border right-0 w-[35rem] z-20 cursor-auto">
			<section className="max-h-72 overflow-auto">
				<ul>
					{products.map((item) => (
						<li key={item.Ids} className="pb-1">
							<div className="grid grid-cols-[90px_1fr]">
								<div>
									<img src={item.img} alt={item.author} />
								</div>
								<div className="p-8 text-xl h-full flex flex-col">
									<h4 className="mb-2 capitalize">{item.title}</h4>
									<p>Quantity: {item.cartCount}</p>
									<p className="mt-auto self-end">
										{item.price.toFixed(2)} PLN
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</section>
			<section>
				<div className="space-y-4 p-12 border-t">
					<div className="text-xl uppercase flex justify-between">
						product price
						<span className="text-left">{total.toFixed(2)} PLN</span>
					</div>
					<div className="text-xl uppercase flex justify-between">
						delivery<span className=" text-left">From 0,00 PLN</span>
					</div>
					<div className="text-xl uppercase flex justify-between ">
						<span>
							<strong>total</strong> with VAT
						</span>
						<span className="text-left font-bold text-2xl">
							{total.toFixed(2)} PLN
						</span>
					</div>
					<div className="w-full">
						<Link to="cart" className="w-full text-2xl">
							<button
								type="button"
								className="w-full py-4 capitalize bg-[#6AD991] text-white hover:bg-[#1AD991] transition font-bold"
							>
								Cart
							</button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CartSmall;
