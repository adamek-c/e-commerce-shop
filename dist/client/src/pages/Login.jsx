"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable arrow-body-style */
const components_1 = require("../components");
const Login = () => {
    return (<div>
			<div className="flex flex-col lg:flex-row min-h-[calc(100vh-122px)] mx-auto">
				<section className="w-full lg:flex-1">
					<components_1.SignIn />
				</section>
				<section className="w-full lg:flex-1 bg-[#F2F2F2]">
					<components_1.Register />
				</section>
			</div>
		</div>);
};
exports.default = Login;
