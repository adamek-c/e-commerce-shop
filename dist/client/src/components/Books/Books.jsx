"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_lazy_load_image_component_1 = require("react-lazy-load-image-component");
require("react-lazy-load-image-component/src/effects/blur.css");
const Books = ({ id, title, img, price }) => (<article className="max-w-max">
		<figure>
			<react_router_dom_1.Link to={`product/${id}`} className="cursor-pointer">
				<div>
					<react_lazy_load_image_component_1.LazyLoadImage src={img} alt={title} className="h-full object-fit w-full" effect="blur" height="500px"/>
				</div>
			</react_router_dom_1.Link>
			<figcaption>
				<div className=" text-xl capitalize  rounded-b-xl mt-auto font-medium">
					<h2 className="pt-8 mb-1">{title}</h2>
					<span>{price.toFixed(2)} PLN</span>
				</div>
			</figcaption>
		</figure>
	</article>);
exports.default = Books;
