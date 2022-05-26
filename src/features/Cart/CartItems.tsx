import { FC } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";
import { AiOutlineClose } from "react-icons/ai";
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
		<div className="mt-8 first:mt-0 flex bg-neutral-100 p-8 rounded relative">
			<div className="absolute right-10 text-4xl cursor-pointer">
				<AiOutlineClose onClick={() => dispatch(removeItem(Ids))} />
			</div>
			<div className="max-w-xs hidden sm:block">
				<img src={img} alt={title} className="w-full block" />
			</div>
			<div className="sm:ml-8">
				<h2 className="text-4xl capitalize">{title}</h2>
				<h2 className="text-xl mt-2">{author} (Autor)</h2>
				<h4 className="mt-4 text-2xl font-bold">{price} PLN</h4>
				<h4 className="text-2xl mt-2">Ilość {cartCount} sztuka</h4>
			</div>
		</div>
	);
};

export default CartItems;
