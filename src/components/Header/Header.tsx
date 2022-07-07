import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RootState } from "../../app/store";

const Header = () => {
	const amount = useSelector((state: RootState) => state.cart.amount);

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
					<span className="relative">
						<MdOutlineShoppingCart />
						{amount ? (
							<div className="absolute -top-4 text-2xl right-0 bg-[#4761A3] w-8 h-8 rounded-full text-center">
								{amount}
							</div>
						) : null}
					</span>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
