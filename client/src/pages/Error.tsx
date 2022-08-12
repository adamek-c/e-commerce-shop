import { Link } from "react-router-dom";
import { Container } from "../components";

const Error = () => (
	<section>
		<Container>
			<div className="text-center mt-20">
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
						<span className="material-symbols-outlined ml-3">
							arrow_forward
						</span>
					</Link>
				</button>
			</div>
		</Container>
	</section>
);

export default Error;
