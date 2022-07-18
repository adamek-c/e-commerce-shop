import { useId } from "react";

const Register = () => {
	const uniqueId = useId();

	return (
		<div className="max-w-xl py-20 mx-auto px-10 sm:px-0">
			<h2 className="text-3xl font-bold text-center mb-20">
				It's you first time
			</h2>
			<form className="text-2xl space-y-16">
				<div className="flex flex-col space-y-4">
					<label htmlFor={`${uniqueId}-email`}>
						<span className="after:content-['*'] after:ml-0.5 after:text-[#F25050]">
							Email
						</span>
					</label>
					<input
						id={`${uniqueId}-email`}
						name="email"
						type="email"
						className="border-b focus:outline-none pb-2 focus:border-b-black bg-inherit"
					/>
					<div className="hidden">This field is required</div>
				</div>
				<div className="flex lg:space-x-3 flex-col lg:flex-row">
					<div className="space-y-2 flex flex-col">
						<label htmlFor={`${uniqueId}-name`}>
							<span className="after:content-['*'] after:ml-0.5 after:text-[#F25050]">
								Name
							</span>
						</label>
						<input
							id={`${uniqueId}-name`}
							name="name"
							type="text"
							className="border-b focus:outline-none pb-2 focus:border-b-black bg-inherit"
						/>
						<div className="hidden">This field is required</div>
					</div>
					<div className="space-y-2 flex flex-col mt-16 lg:mt-0">
						<label htmlFor={`${uniqueId}-lastName`}>
							<span className="after:content-['*'] after:ml-0.5 after:text-[#F25050]">
								Last Name
							</span>
						</label>
						<input
							id={`${uniqueId}-lastName`}
							name="lastName"
							type="text"
							className="border-b focus:outline-none pb-2 focus:border-b-black bg-inherit"
						/>
						<div className="hidden">This field is required</div>
					</div>
				</div>
				<div className="flex flex-col space-y-4">
					<label htmlFor={`${uniqueId}-password`}>
						<span className="after:content-['*'] after:ml-0.5 after:text-[#F25050]">
							Password
						</span>
					</label>
					<input
						id={`${uniqueId}-password`}
						name="password"
						type="password"
						className="border-b focus:outline-none pb-2 focus:border-b-black bg-inherit"
					/>
					<div className="hidden">This field is required</div>
				</div>
				<button
					type="button"
					className="font-bold text-3xl bg-[#6AD991] text-white w-full py-5 transition hover:bg-[#1AD991]"
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Register;
