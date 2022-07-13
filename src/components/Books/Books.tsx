import { FC } from "react";
import { Link } from "react-router-dom";
import {
	LazyLoadImage,
	trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BooksState } from "../../interfaces/ComponentsInterfaces/Book";

const Books: FC<BooksState> = ({ id, title, img, price }) => (
	<article>
		<figure>
			<Link to={`product/${id}`} className="cursor-pointer group">
				<div className="h-[50rem]  md:h-[50rem] overflow-hidden">
					<LazyLoadImage
						src={img}
						alt={title}
						className="w-full h-full object-fit block group-hover:scale-105 transition"
						effect="blur"
					/>
				</div>
			</Link>
		</figure>
		<figcaption>
			<div className=" text-xl capitalize  rounded-b-xl mt-auto font-medium">
				<h2 className="pt-8 mb-1">{title}</h2>
				<span>{price.toFixed(2)} PLN</span>
			</div>
		</figcaption>
	</article>
);

export default trackWindowScroll(Books);
