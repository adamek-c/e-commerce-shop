import { Outlet } from "react-router";
import { Footer, Header } from "../components";

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
