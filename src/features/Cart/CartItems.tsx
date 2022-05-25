import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Products {
	author: string | undefined;
	title: string | undefined;
	img: string | undefined;
	price: number | undefined;
}

const CartItems: FC<Products> = ({ author, title, img, price }) => {
	return (
		<div className="mt-8 first:mt-0 flex bg-neutral-100 p-8 rounded relative">
			<div className="absolute right-10 text-4xl cursor-pointer">
				<AiOutlineClose />
			</div>
			<div className="max-w-xs hidden sm:block">
				<img src={img} alt={title} className="w-full block" />
			</div>
			<div className="sm:ml-8">
				<h2 className="text-4xl capitalize">{title}</h2>
				<h2 className="text-xl mt-2">{author} (Autor)</h2>
				<h4 className="mt-4 text-2xl font-bold">{price} PLN</h4>
			</div>
		</div>
	);
};

export default CartItems;
