/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import logo from "../../assets/logo.png";
import IconHeader from "../IconHeader/IconHeader";

const Header = () => {
	const { amount } = useSelector((state: RootState) => state.cart);

	return (
		<nav className="w-full border-b bg-inherit">
			<div className="flex flex-col md:flex-row items-center px-8 py-16 justify-between max-w-screen-xl mx-auto gap-8">
				<Link to="/" className="w-48 lg:w-auto">
					<img src={logo} alt="Read it logo" />
				</Link>
				<div className="flex space-x-4 sm:space-x-8 lg:space-x-10">
					<button
						type="button"
						className="flex items-center space-x-2 group transition"
					>
						<span className="material-symbols-outlined text-4xl">search</span>
						<span className="text-2xl group-hover:border-b border-slate-900 capitalize font-medium">
							Search
						</span>
					</button>
					<IconHeader icon="person" title="konto" to="" />
					<IconHeader
						amount={amount}
						icon="shopping_cart"
						title="koszyk"
						to="cart"
					/>
				</div>
				<button
					type="button"
					className="flex items-center space-x-2 group transition md:hidden"
				>
					<span className="material-symbols-outlined text-4xl">menu</span>
					<span className="text-2xl group-hover:border-b border-slate-900 capitalize font-medium">
						Menu
					</span>
				</button>
			</div>
		</nav>
	);
};

export default Header;
