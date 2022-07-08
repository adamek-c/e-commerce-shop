import { Link } from "react-router-dom";
import shopping from "../../assets/shopping.png";

const EmptyCard = () => (
	<div className="flex flex-1 max-w-screen-xl mx-auto w-full flex-col lg:flex-row lg:space-x-40 ">
		<img
			src={shopping}
			alt="shopping illustraction"
			className="sm:w-3/4 md:w-3/4 lg:w-2/4"
		/>
		<div className="mt-28 lg:mt-52 text-center lg:text-left pr-4">
			<h2 className="text-4xl sm:text-5xl lg:text-7xl font-arima font-medium">
				There are no products in the basket
			</h2>
			<p className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-crismon">
				To return to the home page, please click the link below
			</p>
			<button type="button" className="mt-16 group">
				<Link
					to="/"
					className="text-4xl lg:text-5xl font-crismon border py-5 px-16  border-[#6AD991] group-hover:bg-[#6AD991] group-hover:text-white transition flex items-center"
				>
					Home
					<span className="material-symbols-outlined ml-3">arrow_forward</span>
				</Link>
			</button>
		</div>
	</div>
);

export default EmptyCard;
