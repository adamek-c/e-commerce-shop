import { FC } from "react";
import { Link } from "react-router-dom";
import { BooksState } from "../../interfaces/ComponentsInterfaces/Book";

const Books: FC<BooksState> = ({ id, title, img, price }) => (
	<article>
		<figure>
			<Link
				to={`product/${id}`}
				className="cursor-pointer rounded-xl mx-auto group"
			>
				<div className="h-[50rem]  md:h-[50rem] overflow-hidden">
					<img
						src={img}
						alt={title}
						className="w-full h-full object-fit block group-hover:scale-105 transition"
					/>
				</div>
			</Link>
		</figure>
		<figcaption>
			<div className=" text-xl capitalize  rounded-b-xl mt-auto font-medium">
				<h2 className="pt-8 mb-1">{title}</h2>
				<span>{price} PLN</span>
			</div>
		</figcaption>
	</article>
);

export default Books;
