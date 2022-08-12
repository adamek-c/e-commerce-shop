"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_1 = require("react-router");
const react_redux_1 = require("react-redux");
const components_1 = require("../components");
const Error_1 = __importDefault(require("./Error"));
const cartSlice_1 = require("../features/Cart/cartSlice");
const SingleBook = () => {
    const [alert, setAlert] = (0, react_1.useState)(false);
    const { id } = (0, react_router_1.useParams)();
    const books = (0, react_redux_1.useSelector)((state) => state.filter.items);
    const products = (0, react_redux_1.useSelector)((state) => state.cart.cart);
    const product = books.find((book) => book.id === id);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((0, cartSlice_1.calculateTotals)());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);
    const handleAlert = (e) => {
        e.preventDefault();
        setAlert(!alert);
    };
    if (!(product === null || product === void 0 ? void 0 : product.id)) {
        return <Error_1.default />;
    }
    const { id: Id, author, img, title, price, cartCount } = product;
    const Ids = parseInt(Id);
    return (<section>
			<components_1.Container>
				<div className="max-w-2xl mx-auto lg:max-w-screen-xl lg:grid lg:grid-cols-2 lg:grid-rows-2 pt-10 pb-40 lg:py-20">
					<div className="lg:mt-7">
						<div className="mb-2">
							<h2 className="text-2xl tracking-wide font-bold lg:text-4xl">
								<span className="capitalize">{product === null || product === void 0 ? void 0 : product.title}</span> -{" "}
								{product === null || product === void 0 ? void 0 : product.released}
							</h2>
						</div>
						<h2 className="text-xl tracking-wide lg:text-xl">
							{product === null || product === void 0 ? void 0 : product.author} (Autor)
						</h2>
						<components_1.StarsRating rated={product === null || product === void 0 ? void 0 : product.rated}/>
						<h3 className="text-xl tracking-wide my-px lg:text-xl lg:my-1">
							Wydanie: {product === null || product === void 0 ? void 0 : product.edition}
						</h3>
						<h3 className="text-xl tracking-wide mb-2 lg:text-xl">
							Kategoria: <span className="capitalize">{product === null || product === void 0 ? void 0 : product.category}</span>
						</h3>
						<p className="text-xl tracking-wide py-4 mt-2 lg:text-xl lg:mt-4">
							{product === null || product === void 0 ? void 0 : product.description}
						</p>
					</div>
					<div className="mx-auto mt-8 mb-10 lg:row-span-2 lg:col-start-1 lg:col-end-2 lg:order-first lg:max-w-lg">
						<img src={product === null || product === void 0 ? void 0 : product.img} alt={product === null || product === void 0 ? void 0 : product.title} className="w-full block"/>
					</div>
					<div className="mt-10">
						<h3 className="text-2xl lg:text-3xl">
							{product === null || product === void 0 ? void 0 : product.price.toFixed(2)} PLN
						</h3>
						<div className="flex lg:space-x-10 flex-col lg:flex-row max-w-max">
							<button type="button" disabled={alert} className={`${alert && "cursor-wait"} bg-[#6AD991] py-4 px-6 text-3xl text-white hover:drop-shadow-lg mt-10 transition-all flex  space-x-2 capitalize`} onClick={(e) => {
            dispatch((0, cartSlice_1.addToCart)({
                Ids,
                author,
                img,
                title,
                price,
                cartCount,
            }));
            handleAlert(e);
        }}>
								<span>add to cart</span>
								<span className="material-symbols-outlined">
									add_shopping_cart
								</span>
							</button>
							{alert && <components_1.Alert setAlert={setAlert}/>}
						</div>
					</div>
				</div>
			</components_1.Container>
		</section>);
};
exports.default = SingleBook;
