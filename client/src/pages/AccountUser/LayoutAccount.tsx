import { Outlet } from "react-router";
import { Container, Footer, LinkAccount } from "../../components";

const Layout = () => (
	<>
		<Container>
			<div className="flex gap-16 lg:gap-52 xl:gap-96 pt-10 lg:py-20 flex-col md:flex-row md:gap-32 lg:gap-64">
				<LinkAccount />
				<Outlet />
			</div>
		</Container>
		<Footer />
	</>
);

export default Layout;
