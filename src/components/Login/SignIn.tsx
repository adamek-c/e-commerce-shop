import React, { FC } from "react";
import useAutoFocusInput from "../../hooks/useAutoFocusInput";
import Input from "../shared/Login/Input";

interface Props {
	activeForm: boolean;
	setActiveForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: FC<Props> = ({ activeForm, setActiveForm }) => {
	const refFocus = useAutoFocusInput(activeForm);

	const handleOpen = () => {
		setActiveForm(!activeForm);
	};

	return (
		<div className="max-w-xl py-40 mx-auto px-10 sm:px-0">
			<h2 className="text-3xl font-bold text-center mb-16">
				Are you already a user?
			</h2>
			{activeForm && (
				<form className="text-2xl">
					<div className="flex flex-col space-y-4 mb-16">
						<Input props="email" ref={refFocus} />
						<div className="text-xl text-[#F25050] hidden">
							This field is required
						</div>
					</div>
					<div className="flex flex-col space-y-4 mb-16">
						<Input
							props="password"
							iconVisible="visibility"
							iconHidden="visibility_off"
						/>
						<div className="text-xl text-[#F25050] hidden">
							This field is required
						</div>
					</div>
					<button
						type="button"
						className="font-bold text-3xl bg-[#6AD991] text-white w-full py-5 transition hover:bg-[#1AD991] mt-12"
					>
						Sign In
					</button>
				</form>
			)}
			{!activeForm && (
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
