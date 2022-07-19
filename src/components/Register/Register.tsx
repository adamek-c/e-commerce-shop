import React, { FC } from "react";
import Input from "../shared/Login/Input";
import useAutoFocusInput from "../../hooks/useAutoFocusInput";

interface Props {
	activeForm: boolean;
	setActiveForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register: FC<Props> = ({ activeForm, setActiveForm }) => {
	const refFocus = useAutoFocusInput(activeForm);

	const handleOpen = () => {
		setActiveForm(!activeForm);
	};

	return (
		<div className="max-w-xl py-40 mx-auto px-10 sm:px-0">
			<h2 className="text-3xl font-bold text-center mb-20">
				It's you first time
			</h2>
			{!activeForm && (
				<form className="text-2xl">
					<div className="flex flex-col space-y-4 mb-16">
						<Input props="email" ref={refFocus} />
						<div className="hidden">This field is required</div>
					</div>
					<div className="flex lg:space-x-3 flex-col lg:flex-row mb-16">
						<div className="space-y-2 flex flex-col">
							<Input props="name" />
							<div className="hidden">This field is required</div>
						</div>
						<div className="space-y-2 flex flex-col mt-16 lg:mt-0">
							<Input props="last name" />
							<div className="hidden">This field is required</div>
						</div>
					</div>
					<div className="flex flex-col space-y-4 mb-16">
						<Input
							props="password"
							iconVisible="visibility"
							iconHidden="visibility_off"
						/>
						<div className="hidden">This field is required</div>
					</div>
					<button
						type="button"
						className="font-bold text-3xl bg-[#6AD991] text-white w-full py-5 transition hover:bg-[#1AD991] mt-12"
					>
						Sign Up
					</button>
				</form>
			)}
			{activeForm && (
				<>
					<button
						type="button"
						className="font-bold text-3xl bg-white text-[#6AD991] w-full py-5 transition hover:bg-[#6AD991] border-2 border-[#6AD991] hover:text-white transition"
						onClick={handleOpen}
					>
						Sign Up
					</button>
					<div className="mt-20 space-y-12 capitalize">
						<h3 className="text-2xl font-medium">you will gain</h3>
						<div className="flex items-center space-x-4 text-xl">
							<span className="material-symbols-outlined">history</span>
							<h4>access to purchase history</h4>
						</div>
						<div className="flex items-center space-x-4 text-xl">
							<span className="material-symbols-outlined">sell</span>
							<h4>sale notices</h4>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Register;
