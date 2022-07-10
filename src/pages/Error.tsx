import { Link } from "react-router-dom";

const Error = () => (
	<section>
		<div className="text-center mt-36 min-h-screen">
			<p className="text-9xl md:text-[10rem]  lg:text-[15rem] font-bold mb-24 text-[#F25050]">
				404
			</p>
			<h2 className="text-4xl lg:text-6xl mb-24 uppercase">
				Opps! Page Not Found
			</h2>
			<button type="button" className="group">
				<Link
					to="/"
					className="text-4xl lg:text-4xl border py-5 px-16  bg-[#6AD991] text-white transition flex items-center group-hover:drop-shadow-lg"
				>
					Home
					<span className="material-symbols-outlined ml-3">arrow_forward</span>
				</Link>
			</button>
		</div>
	</section>
);

export default Error;
