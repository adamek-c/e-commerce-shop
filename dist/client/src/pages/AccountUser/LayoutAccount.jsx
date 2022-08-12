"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_1 = require("react-router");
const components_1 = require("../../components");
const Layout = () => (<>
		<components_1.Container>
			<div className="flex gap-16 lg:gap-52 xl:gap-96 pt-10 lg:py-20 flex-col md:flex-row md:gap-32 lg:gap-64">
				<components_1.LinkAccount />
				<react_router_1.Outlet />
			</div>
		</components_1.Container>
		<components_1.Footer />
	</>);
exports.default = Layout;
