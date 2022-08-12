import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginForm, registerForm } from "../../features/user/user";

const Sign = () => {
	const dispatch = useDispatch();

	return (
		<div className="absolute hidden group-hover:lg:block  top-[30px] bg-white border w-[35rem] -right-10 z-20 cursor-auto">
			<section className="p-16">
				<div className="text-2xl font-bold mb-12">You are already a user?</div>
				<Link
					to="login"
					className="text-3xl capitalize bg-[#6AD991] text-white py-4 px-16 font-bold transition hover:bg-[#1AD991]"
					onClick={() => dispatch(loginForm())}
				>
					Sign in
				</Link>
			</section>
			<section className="p-16 bg-[#F2F2F2]">
				<div className="text-2xl font-bold mb-4">It's you first time?</div>
				<p className="text-xl mb-12">
					You will get access to many features and discounts
				</p>
				<Link
					to="login"
					className="text-3xl capitalize border-2 border-[#6AD991] text-[#6AD991] py-4 px-16 font-bold transition hover:bg-[#6AD991] hover:text-white"
					onClick={() => dispatch(registerForm())}
				>
					Sign up
				</Link>
			</section>
		</div>
	);
};

export default Sign;
