import { useState } from "react";
import Input from "../shared/Login/Input";

const Register = () => {
	const [register, setRegister] = useState<boolean>(false);

	const handleOpen = () => {
		setRegister(!register);
	};

	return (
		<div className="max-w-xl py-40 mx-auto px-10 sm:px-0">
			<h2 className="text-3xl font-bold text-center mb-20">
				It's you first time
			</h2>
			{register && (
				<form className="text-2xl space-y-16">
					{register && (
						<>
							<div className="flex flex-col space-y-4">
								<Input props="email" />
								<div className="hidden">This field is required</div>
							</div>
							<div className="flex lg:space-x-3 flex-col lg:flex-row">
								<div className="space-y-2 flex flex-col">
									<Input props="name" />
									<div className="hidden">This field is required</div>
								</div>
								<div className="space-y-2 flex flex-col mt-16 lg:mt-0">
									<Input props="last name" />
									<div className="hidden">This field is required</div>
								</div>
							</div>
							<div className="flex flex-col space-y-4">
								<Input props="password" />
								<div className="hidden">This field is required</div>
							</div>
						</>
					)}
					<button
						type="button"
						className="font-bold text-3xl bg-[#6AD991] text-white w-full py-5 transition hover:bg-[#1AD991]"
					>
						Sign Up
					</button>
				</form>
			)}
			{!register && (
				<button
					type="button"
					className="font-bold text-3xl bg-white text-[#6AD991] w-full py-5 transition hover:bg-[#6AD991] border-2 border-[#6AD991] hover:text-white transition"
					onClick={handleOpen}
				>
					Sign Up
				</button>
			)}
		</div>
	);
};

export default Register;
