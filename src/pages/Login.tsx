import { Register, SignIn } from "../components";

const Login = () => (
	<div>
		<div className="flex flex-col lg:flex-row min-h-screen mx-auto">
			<section className="w-full lg:flex-1">
				<SignIn />
			</section>
			<section className="w-full lg:flex-1 bg-[#F2F2F2]">
				<Register />
			</section>
		</div>
	</div>
);

export default Login;
