import { FC } from "react";
import { Link } from "react-router-dom";
import StarsRating from "../Stars/StarsRating";

interface BooksState {
	id: string;
	title: string;
	rated?: number;
	img: string;
	price: number;
}

const Books: FC<BooksState> = ({ id, title, rated, img, price }) => {
	return (
		<Link
			to={`product/${id}`}
			className="bg-neutral-100 flex flex-col cursor-pointer rounded-xl max-w-sm"
		>
			<img src={img} alt={title} className="p-8 mx-auto w-full block" />

			<div className="p-8 pt-0 text-xl capitalize bg-neutral-200 rounded-b-xl mt-auto">
				<h2 className="pt-8 mb-3">{title}</h2>
				<span className="font-bold">{price} PLN</span>
				<StarsRating rated={rated} />
			</div>
		</Link>
	);
};

export default Books;
