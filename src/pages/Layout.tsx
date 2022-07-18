import { Outlet } from "react-router";
import { Header } from "../components";

const Layout = () => (
	<div>
		<Header />
		<Outlet />
		{/* <Footer /> */}
	</div>
);

export default Layout;
