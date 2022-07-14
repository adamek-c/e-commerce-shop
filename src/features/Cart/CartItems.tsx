/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC } from "react";
import { useDispatch } from "react-redux";

import { removeItem } from "./cartSlice";
import { Products } from "../../interfaces/CartInterfaces/cart";

const CartItems: FC<Products> = ({
	Ids,
	author,
	title,
	img,
	price,
	cartCount,
}) => {
	const dispatch = useDispatch();

	return (
		<div className="first:mt-0 flex flex-col sm:flex-row p-8">
			<div className="h-[25rem] w-[20rem]">
				<img src={img} alt={title} className="w-full h-full object-fit" />
			</div>
			<div className="mt-12 sm:mt-0 sm:ml-8 flex flex-col">
				<h2 className="text-2xl tracking-wide font-semibold lg:text-2xl capitalize">
					{title}
				</h2>
				<h2 className="text-xl mt-2">{author} (Autor)</h2>
				<h4 className="mt-4 text-2xl">{price?.toFixed(2)} PLN</h4>
				<h4 className="text-2xl mt-2 sm:mt-auto">Quantity {cartCount}</h4>
			</div>
			<span className="text-4xl cursor-pointer mt-4 h-max sm:ml-auto group">
				<svg
					onClick={() => dispatch(removeItem(Ids))}
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10 group-hover:stroke-[#F25050] transition"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					/>
				</svg>
			</span>
		</div>
	);
};

export default CartItems;
