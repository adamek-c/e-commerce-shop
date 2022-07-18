/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-expressions */
import { useState } from "react";
import Input from "../shared/Login/Input";

const SignIn = () => {
	const [signIn, setSignIn] = useState<boolean>(true);
	// eslint-disable-next-line no-undef

	const handleOpen = () => {
		setSignIn(!signIn);
	};

	return (
		<div className="max-w-xl py-40 mx-auto px-10 sm:px-0">
			<h2 className="text-3xl font-bold text-center mb-20">
				Are you already a user?
			</h2>
			{signIn && (
				<form className="text-2xl space-y-16">
					<div className="flex flex-col space-y-4">
						<Input props="email" />
						<div className="text-xl text-[#F25050] hidden">
							This field is required
						</div>
					</div>
					<div className="flex flex-col space-y-4">
						<Input props="password" />
						<div className="text-xl text-[#F25050] hidden">
							This field is required
						</div>
					</div>
					<button
						type="button"
						className="font-bold text-3xl bg-[#6AD991] text-white w-full py-5 transition hover:bg-[#1AD991]"
					>
						Sign In
					</button>
				</form>
			)}
			{!signIn && (
				<button
					type="button"
					className="font-bold text-3xl bg-white text-[#6AD991] w-full py-5 transition hover:bg-[#6AD991] border-2 border-[#6AD991] hover:text-white transition"
					onClick={handleOpen}
				>
					Sign In
				</button>
			)}
		</div>
	);
};

export default SignIn;
