import { FC } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BooksState } from "../../interfaces/ComponentsInterfaces/Book";

const Books: FC<BooksState> = ({ id, title, img, price }) => (
	<article className="max-w-max">
		<figure>
			<Link to={`product/${id}`} className="cursor-pointer">
				<div>
					<LazyLoadImage
						src={img}
						alt={title}
						className="h-full object-fit w-full"
						effect="blur"
						height="500px"
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

export default Books;
