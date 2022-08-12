/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
import { Link } from "react-router-dom";

const LinkAccount = () => {
	return (
		<div className="place-self-center md:place-self-start mt-4 w-72">
			<h4 className="font-semibold text-2xl">My Account</h4>
			<ul className="capitalize flex flex-col space-y-4 pl-4 mt-4 text-xl">
				<li>
					<Link to="/my-account" className="hover:text-slate-500 transition">
						my orders
					</Link>
				</li>
				<li>
					<Link to="my-returns" className="hover:text-slate-500 transition">
						my returns
					</Link>
				</li>
				<li>
					<Link to="personal-data" className="hover:text-slate-500 transition">
						personal data
					</Link>
				</li>
			</ul>
			<button
				type="button"
				className="hover:text-slate-500 transition capitalize pl-4 mt-4 text-xl"
			>
				log out
			</button>
		</div>
	);
};

export default LinkAccount;
