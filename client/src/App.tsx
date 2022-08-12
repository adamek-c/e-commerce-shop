import { Route, Routes } from "react-router";
// import pages
import {
	Layout,
	Home,
	SingleBook,
	Error,
	Cart,
	MyOrder,
	Login,
	LayoutAccount,
	PersonalData,
	ProtectedUserPage,
	MyReturns,
} from "./pages";

const App = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="cart" element={<Cart />} />
			<Route path="product/:id" element={<SingleBook />} />
			<Route element={<ProtectedUserPage />}>
				<Route path="my-account" element={<LayoutAccount />}>
					<Route index element={<MyOrder />} />
					<Route path="my-returns" element={<MyReturns />} />
					<Route path="personal-data" element={<PersonalData />} />
				</Route>
			</Route>
			<Route path="login" element={<Login />} />
			<Route path="*" element={<Error />} />
		</Route>
	</Routes>
);

export default App;
