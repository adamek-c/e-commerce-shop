import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
	return (
		<nav className="w-full bg-[#4777A3]">
			<div className="flex items-center p-8 justify-between max-w-screen-xl mx-auto h-36">
				<Link to="/">
					<h1 className="text-4xl tracking-widest font-bold text-white cursor-pointer lg:text-5xl">
						BooKs.
					</h1>
				</Link>
				<Link
					to="cart"
					className="text-4xl text-white cursor-pointer lg:text-5xl"
				>
					<MdOutlineShoppingCart />
				</Link>
			</div>
		</nav>
	);
};

export default Header;
