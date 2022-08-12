"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const authSlice_1 = require("../../features/auth/authSlice");
const IconHeader_1 = __importDefault(require("../IconHeader/IconHeader"));
const AccountMenu = ({ name }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleLogOut = () => {
        navigate("/", {
            replace: true,
        });
        (0, authSlice_1.removeUserLStorage)();
        window.location.reload();
    };
    return (<div className="absolute hidden group-hover:lg:block  top-[30px] bg-white border w-[35rem] -right-10 z-20 cursor-auto">
			<section className="p-16">
				<h3 className="text-2xl">
					Welcome, <span className="font-semibold">{name}</span>
				</h3>
			</section>
			<hr />
			<section className="px-16 py-12">
				<div className="space-y-4 flex flex-col border-none">
					<div className="transition hover:text-neutral-500">
						<IconHeader_1.default icon="shopping_basket" title="my orders" to="my-account" border="none"/>
					</div>
					<div className="transition hover:text-neutral-500">
						<IconHeader_1.default icon="outbox" title="my returns" to="my-account/my-returns" border="none"/>
					</div>
					<div className="transition hover:text-neutral-500">
						<IconHeader_1.default icon="manage_accounts" title="personal data" to="my-account/personal-data" border="none"/>
					</div>
				</div>
				<button type="button" className="transition hover:text-[#F25050] mt-8 flex space-x-2 text-2xl items-center capitalize" onClick={handleLogOut}>
					<span className="material-symbols-outlined">logout</span>
					<span>log out</span>
				</button>
			</section>
		</div>);
};
exports.default = AccountMenu;
