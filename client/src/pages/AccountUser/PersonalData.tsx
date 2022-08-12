/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import { User } from "../../components/Register/Register";
import Input from "../../components/shared/Login/Input";

interface Prop {
	birthday: string;
}

interface UserInfo extends User, Prop {}

const PersonalData = () => {
	const [formRegister, setFormRegister] = useState<UserInfo>({
		name: "",
		lastName: "",
		email: "",
		password: "",
		birthday: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormRegister((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const { name, lastName, email, password } = formRegister;
	return (
		<section className="w-full">
			<div>
				<h4 className="text-[1.4rem] capitalize">
					my account {" > "} my personal data
				</h4>
				<hr className="mt-8" />
				<h3 className="mt-8 text-3xl">My Data</h3>
				<p className="mt-4 text-xl capitalize">
					<span className="text-[#F25050]">*</span> fields required
				</p>
			</div>
			<form className="text-2xl mt-16">
				<div className="flex lg:space-x-3 flex-col lg:flex-row mb-16">
					<div className="space-y-2 flex flex-col">
						<Input props="name" value={name} onChange={handleChange} />
						<div className="hidden">This field is required</div>
					</div>
					<div className="space-y-2 flex flex-col mt-16 lg:mt-0">
						<Input props="lastName" value={lastName} onChange={handleChange} />
						<div className="hidden">This field is required</div>
					</div>
				</div>
				<div className="flex flex-col space-y-4 mb-16">
					<Input props="email" value={email} onChange={handleChange} />
					<div className="hidden">This field is required</div>
				</div>
				<h3 className="my-8 text-3xl capitalize">change you password</h3>
				<div className="flex flex-col space-y-4 mb-16">
					<Input props="password" value={password} onChange={handleChange} />
					<div className="hidden">This field is required</div>
				</div>
				<h3 className="my-8 text-3xl capitalize">Delete account</h3>
				<div>
					<button
						type="button"
						className="text-2xl py-4 px-16 bg-[#F25050] text-white transition hover:bg-[#d25050]"
					>
						Delete
					</button>
				</div>
				<div className="flex justify-end">
					<button
						type="button"
						className="font-bold text-3xl bg-[#6AD991] text-white w-full py-5 transition hover:bg-[#1AD991] mt-12 w-fit px-10"
					>
						Save Changes
					</button>
				</div>
			</form>
		</section>
	);
};

export default PersonalData;
