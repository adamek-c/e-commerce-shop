import { useId } from "react";

const Register = () => {
	const uniqueId = useId();

	return (
		<div className="max-w-lg pt-40 mx-auto">
			<h2 className="text-3xl font-bold text-center mb-20">
				It's you first time
			</h2>
			<form>
				<div>
					<label htmlFor={`${uniqueId}-email`}>Email</label>
					<input id={`${uniqueId}-email`} name="email" type="email" />
					<div>This field is required</div>
				</div>
				<div>
					<div>
						<label htmlFor={`${uniqueId}-name`}>Name</label>
						<input id={`${uniqueId}-name`} name="name" type="text" />
						<div>This field is required</div>
					</div>
					<div>
						<label htmlFor={`${uniqueId}-lastName`}>Last Name</label>
						<input id={`${uniqueId}-lastName`} name="lastName" type="text" />
						<div>This field is required</div>
					</div>
				</div>
				<button type="button">Sign Up</button>
			</form>
		</div>
	);
};

export default Register;
