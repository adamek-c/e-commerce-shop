/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Input from "../shared/Login/Input";
import useAutoFocusInput from "../../hooks/useAutoFocusInput";
import { register, reset } from "../../features/auth/authSlice";
import { registerForm } from "../../features/user/user";
import { AppDispatch, RootState } from "../../app/store";

export interface User {
	name: string;
	lastName: string;
	password: string;
	email: string;
}

const Register = () => {
	const { user, message } = useSelector((state: RootState) => state.auth);
	const { activeForm } = useSelector((state: RootState) => state.userActive);
	const refFocus = useAutoFocusInput(activeForm);

	const [formRegister, setFormRegister] = useState<User>({
		name: "",
		lastName: "",
		email: "",
		password: "",
	});

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const { name, lastName, email, password } = formRegister;

	const handleSubmitRegister = (e: React.SyntheticEvent) => {
		e.preventDefault();

		const userData = {
			name,
			lastName,
			email,
			password,
		};

		return dispatch(register(userData));
	};

	useEffect(() => {
		if (user) {
			navigate("/");
		}
		dispatch(reset());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user, navigate]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormRegister((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="max-w-xl py-40 mx-auto px-10 sm:px-0">
			<h2 className="text-3xl font-bold text-center mb-20">
				It's you first time
			</h2>
			{!activeForm && (
				<>
					{message && (
						<h3 className="mb-10 font-bold text-[#F25050] text-xl capitalize flex items-center justify-center">
							<span className="material-symbols-outlined mr-4">warning</span>
							{message}
						</h3>
					)}
					<form className="text-2xl" onSubmit={handleSubmitRegister}>
						<div className="flex flex-col space-y-4 mb-16">
							<Input
								props="email"
								ref={refFocus}
								value={email}
								onChange={handleChange}
							/>
						</div>
						<div className="flex lg:space-x-3 flex-col lg:flex-row mb-16">
							<div className="space-y-2 flex flex-col">
								<Input props="name" value={name} onChange={handleChange} />
							</div>
							<div className="space-y-2 flex flex-col mt-16 lg:mt-0">
								<Input
									props="lastName"
									value={lastName}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="flex flex-col space-y-4 mb-16">
							<Input
								props="password"
								iconVisible="visibility"
								iconHidden="visibility_off"
								value={password}
								onChange={handleChange}
							/>
						</div>
						<button
							type="submit"
							className="font-bold text-3xl bg-[#6AD991] text-white w-full py-5 transition hover:bg-[#1AD991] mt-12"
						>
							Sign Up
						</button>
					</form>
				</>
			)}
			{activeForm && (
				<>
					<button
						type="button"
						className="font-bold text-3xl bg-white text-[#6AD991] w-full py-5 transition hover:bg-[#6AD991] border-2 border-[#6AD991] hover:text-white transition"
						onClick={() => dispatch(registerForm())}
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
