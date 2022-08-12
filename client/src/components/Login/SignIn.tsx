/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import useAutoFocusInput from "../../hooks/useAutoFocusInput";
import { loginForm } from "../../features/user/user";
import { login, reset } from "../../features/auth/authSlice";
import Input from "../shared/Login/Input";
import { AppDispatch, RootState } from "../../app/store";

interface Props {
	email: string;
	password: string;
}

const SignIn = () => {
	const { user, messageLogin } = useSelector((state: RootState) => state.auth);
	const { activeForm } = useSelector((state: RootState) => state.userActive);
	const refFocus = useAutoFocusInput(activeForm);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const [formLogIn, setFormLogIn] = useState<Props>({
		email: "",
		password: "",
	});

	const { email, password } = formLogIn;

	const handleSubmitLogIn = (e: React.SyntheticEvent) => {
		e.preventDefault();

		const userLogIn = {
			email,
			password,
		};

		return dispatch(login(userLogIn));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormLogIn((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	useEffect(() => {
		if (user) {
			navigate("/", {
				replace: true,
			});
		}
		dispatch(reset());
	}, [user, navigate, dispatch]);

	return (
		<div className="max-w-xl py-40 mx-auto px-10 sm:px-0">
			<h2 className="text-3xl font-bold text-center mb-16">
				Are you already a user?
			</h2>
			{activeForm && (
				<>
					{messageLogin && (
						<h3 className="mb-10 font-bold text-[#F25050] text-xl capitalize flex items-center justify-center">
							<span className="material-symbols-outlined mr-4">warning</span>
							{messageLogin}
						</h3>
					)}
					<form className="text-2xl" onSubmit={handleSubmitLogIn}>
						<div className="flex flex-col space-y-4 mb-16">
							<Input
								props="email"
								ref={refFocus}
								value={email}
								onChange={handleChange}
							/>
							<div className="text-xl text-[#F25050] hidden">
								This field is required
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
							<div className="text-xl text-[#F25050] hidden">
								This field is required
							</div>
						</div>
						<button
							type="submit"
							className="font-bold text-3xl bg-[#6AD991] text-white w-full py-5 transition hover:bg-[#1AD991] mt-12"
						>
							Sign In
						</button>
					</form>
				</>
			)}
			{!activeForm && (
				<button
					type="button"
					className="font-bold text-3xl bg-white text-[#6AD991] w-full py-5 transition hover:bg-[#6AD991] border-2 border-[#6AD991] hover:text-white transition"
					onClick={() => dispatch(loginForm())}
				>
					Sign In
				</button>
			)}
		</div>
	);
};

export default SignIn;
