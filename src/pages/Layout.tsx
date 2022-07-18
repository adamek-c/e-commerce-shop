import { Outlet } from "react-router";
import { Header } from "../components";

const Layout = () => (
	<div>
		<Header />
		<Outlet />
	</div>
);

export default Layout;
