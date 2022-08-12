"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_1 = require("react-router");
const components_1 = require("../components");
const Layout = () => (<div>
		<components_1.Header />
		<react_router_1.Outlet />
	</div>);
exports.default = Layout;
