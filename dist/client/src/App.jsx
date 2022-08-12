"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_1 = require("react-router");
// import pages
const pages_1 = require("./pages");
const App = () => (<react_router_1.Routes>
		<react_router_1.Route path="/" element={<pages_1.Layout />}>
			<react_router_1.Route index element={<pages_1.Home />}/>
			<react_router_1.Route path="cart" element={<pages_1.Cart />}/>
			<react_router_1.Route path="product/:id" element={<pages_1.SingleBook />}/>
			<react_router_1.Route element={<pages_1.ProtectedUserPage />}>
				<react_router_1.Route path="my-account" element={<pages_1.LayoutAccount />}>
					<react_router_1.Route index element={<pages_1.MyOrder />}/>
					<react_router_1.Route path="my-returns" element={<pages_1.MyReturns />}/>
					<react_router_1.Route path="personal-data" element={<pages_1.PersonalData />}/>
				</react_router_1.Route>
			</react_router_1.Route>
			<react_router_1.Route path="login" element={<pages_1.Login />}/>
			<react_router_1.Route path="*" element={<pages_1.Error />}/>
		</react_router_1.Route>
	</react_router_1.Routes>);
exports.default = App;
