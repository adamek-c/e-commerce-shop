import { Link } from "react-router-dom";

const Error = () => {
	return (
		<section>
			<div className="text-center mt-24 min-h-screen">
				<h2 className="text-8xl mb-24">
					Page <span className="text-red-500">404</span>
				</h2>
				<Link
					to="/"
					className="text-3xl bg-[#4761A3] text-white rounded px-6 py-2 hover:bg-[#384F88] transition-all"
				>
					Strona główna
				</Link>
			</div>
		</section>
	);
};

export default Error;
