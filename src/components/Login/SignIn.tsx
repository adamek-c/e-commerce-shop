import Input from "../shared/Login/Input";

const SignIn = () => (
	<div className="max-w-xl py-20  mx-auto px-10 sm:px-0">
		<h2 className="text-3xl font-bold text-center mb-20">
			Are you already a user?
		</h2>
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
	</div>
);

export default SignIn;
