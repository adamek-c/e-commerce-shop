import { Route, Routes } from "react-router";
// import pages
import { Layout, Home, SingleBook, Error, Cart, Account } from "./pages";

const App = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="account" element={<Account />} />
			<Route path="cart" element={<Cart />} />
			<Route path="product/:id" element={<SingleBook />} />
			<Route path="*" element={<Error />} />
		</Route>
	</Routes>
);

export default App;
