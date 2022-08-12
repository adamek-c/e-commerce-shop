import { Link } from "react-router-dom";

/* eslint-disable arrow-body-style */
const MyReturns = () => {
	return (
		<section className="w-full">
			<div className="pb-16">
				<h4 className="text-[1.4rem] capitalize hidden md:block">
					my account {" > "} my returns
				</h4>
				<h3 className="mt-4 text-3xl text-center md:text-left">My Returns</h3>
			</div>
			<div className="my-16 md:my-32 text-center space-y-4">
				<span className="material-symbols-outlined text-7xl bg-[#6AD991] rounded-full p-2 mb-4">
					flutter_dash
				</span>
				<h4 className="text-4xl">No refunds</h4>
				<p className="text-2xl">You have not made any refund</p>
				<div className="pt-8">
					<Link to="/" className="capitalize text-2xl mt-2 font-bold underline">
						Back
					</Link>
				</div>
			</div>
		</section>
	);
};

export default MyReturns;
