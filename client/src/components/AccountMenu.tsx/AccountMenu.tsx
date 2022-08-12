/* eslint-disable arrow-body-style */
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { removeUserLStorage } from "../../features/auth/authSlice";
import IconHeader from "../IconHeader/IconHeader";

interface Props {
	name: ReactNode;
}

const AccountMenu = ({ name }: Props) => {
	const navigate = useNavigate();

	const handleLogOut = () => {
		navigate("/", {
			replace: true,
		});
		removeUserLStorage();
		window.location.reload();
	};

	return (
		<div className="absolute hidden group-hover:lg:block  top-[30px] bg-white border w-[35rem] -right-10 z-20 cursor-auto">
			<section className="p-16">
				<h3 className="text-2xl">
					Welcome, <span className="font-semibold">{name}</span>
				</h3>
			</section>
			<hr />
			<section className="px-16 py-12">
				<div className="space-y-4 flex flex-col border-none">
					<div className="transition hover:text-neutral-500">
						<IconHeader
							icon="shopping_basket"
							title="my orders"
							to="my-account"
							border="none"
						/>
					</div>
					<div className="transition hover:text-neutral-500">
						<IconHeader
							icon="outbox"
							title="my returns"
							to="my-account/my-returns"
							border="none"
						/>
					</div>
					<div className="transition hover:text-neutral-500">
						<IconHeader
							icon="manage_accounts"
							title="personal data"
							to="my-account/personal-data"
							border="none"
						/>
					</div>
				</div>
				<button
					type="button"
					className="transition hover:text-[#F25050] mt-8 flex space-x-2 text-2xl items-center capitalize"
					onClick={handleLogOut}
				>
					<span className="material-symbols-outlined">logout</span>
					<span>log out</span>
				</button>
			</section>
		</div>
	);
};

export default AccountMenu;
