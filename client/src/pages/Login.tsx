/* eslint-disable arrow-body-style */
import { Register, SignIn } from "../components";

const Login = () => {
	return (
		<div>
			<div className="flex flex-col lg:flex-row min-h-[calc(100vh-122px)] mx-auto">
				<section className="w-full lg:flex-1">
					<SignIn />
				</section>
				<section className="w-full lg:flex-1 bg-[#F2F2F2]">
					<Register />
				</section>
			</div>
		</div>
	);
};

export default Login;
