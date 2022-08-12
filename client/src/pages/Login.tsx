import { useState } from "react";
import { Register, SignIn } from "../components";

const Login = () => {
	const [activeForm, setActiveForm] = useState<boolean>(true);

	return (
		<div>
			<div className="flex flex-col lg:flex-row min-h-[calc(100vh-122px)] mx-auto">
				<section className="w-full lg:flex-1">
					<SignIn activeForm={activeForm} setActiveForm={setActiveForm} />
				</section>
				<section className="w-full lg:flex-1 bg-[#F2F2F2]">
					<Register activeForm={activeForm} setActiveForm={setActiveForm} />
				</section>
			</div>
		</div>
	);
};

export default Login;
