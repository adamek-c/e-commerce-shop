"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const logo_png_1 = __importDefault(require("../../assets/logo.png"));
const IconHeader_1 = __importDefault(require("../IconHeader/IconHeader"));
const Search_1 = __importDefault(require("../Search/Search"));
const Sign_1 = __importDefault(require("../Sign/Sign"));
const CartSmall_1 = __importDefault(require("../CartSmall/CartSmall"));
const AccountMenu_1 = __importDefault(require("../AccountMenu.tsx/AccountMenu"));
const getUserLocalStorage_1 = __importDefault(require("../../hooks/getUserLocalStorage"));
const Header = () => {
    const [open, setOpen] = (0, react_1.useState)(false);
    const { amount } = (0, react_redux_1.useSelector)((state) => state.cart);
    const { cart } = (0, react_redux_1.useSelector)((state) => state.cart);
    const { pathname } = (0, react_router_dom_1.useLocation)();
    const userName = (0, getUserLocalStorage_1.default)();
    const handleOpenSearch = () => {
        setOpen(!open);
    };
    return (<nav className="w-full border-b bg-inherit relative">
			{open && <Search_1.default handleOpenSearch={handleOpenSearch}/>}
			<div className="flex flex-col md:flex-row items-center px-8 py-16 justify-between max-w-screen-xl mx-auto gap-8">
				<react_router_dom_1.Link to="/" className="w-48 lg:w-auto lg:pb-2">
					<img src={logo_png_1.default} alt="Read it logo"/>
				</react_router_dom_1.Link>
				<div className="flex space-x-4 sm:space-x-8 lg:space-x-10">
					<button type="button" className="flex items-center space-x-2 group transition lg:pb-2" onClick={handleOpenSearch}>
						<span className="material-symbols-outlined text-4xl">search</span>
						<span className="text-2xl group-hover:border-b border-slate-900 capitalize font-medium">
							Search
						</span>
					</button>
					<div className="group relative lg:pb-2 cursor-pointer">
						<IconHeader_1.default icon="person" title={userName ? userName.substring(0, 6) : "account"} to={userName ? "my-account" : "login"}/>
						{userName ? <AccountMenu_1.default name={userName}/> : <Sign_1.default />}
					</div>
					<div className="group relative lg:pb-2 cursor-pointer">
						<IconHeader_1.default amount={amount} icon="shopping_cart" title="Cart" to="cart"/>
						{pathname === "/cart" ? null : cart.length !== 0 ? (<CartSmall_1.default />) : null}
					</div>
				</div>
				<button type="button" className="flex items-center space-x-2 group transition md:hidden">
					<span className="material-symbols-outlined text-4xl">menu</span>
					<span className="text-2xl group-hover:border-b border-slate-900 capitalize font-medium">
						Menu
					</span>
				</button>
			</div>
		</nav>);
};
exports.default = Header;
