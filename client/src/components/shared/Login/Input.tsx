/* eslint-disable indent */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
import React, { forwardRef, useId, useState } from "react";
import PropTypes from "prop-types";

interface Props {
	props: string;
	iconVisible?: string;
	iconHidden?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, Props>(
	({ props, iconVisible, iconHidden, value, onChange }, ref) => {
		const uniqueId = useId();
		const [showPassowrd, setShowPassword] = useState<boolean>(true);

		const handleShowPassword = () => {
			setShowPassword(!showPassowrd);
		};

		return (
			<>
				<label htmlFor={`${uniqueId}-${props}`}>
					<span className="after:content-['*'] after:ml-0.5 after:text-[#F25050] capitalize">
						{props === "lastName" ? "last name" : props}
					</span>
				</label>
				<div className="relative">
					<input
						ref={ref}
						id={`${uniqueId}-${props}`}
						name={props}
						type={props === "password" && showPassowrd ? "password" : "text"}
						value={value}
						onChange={onChange}
						className={`${
							props === "password"
								? "pr-16 border-b focus:outline-none pb-2 focus:border-b-black bg-inherit w-full"
								: "pr-0 border-b focus:outline-none pb-2 focus:border-b-black bg-inherit w-full"
						}`}
					/>
					{props === "password" && (
						<div className="group">
							<button
								type="button"
								className="material-symbols-outlined cursor-pointer absolute right-0 -top-4 hover:bg-[#ECECEC] rounded-full p-2 transition"
								onClick={handleShowPassword}
							>
								{showPassowrd ? iconVisible : iconHidden}
							</button>
							<p className="hidden group-hover:block text-right mt-4 text-[11px] absolute right-0 capitalize">
								{showPassowrd ? "show password" : "hide password"}
							</p>
						</div>
					)}
				</div>
			</>
		);
	},
);

Input.propTypes = {
	iconVisible: PropTypes.string,
	iconHidden: PropTypes.string,
};

export default Input;
