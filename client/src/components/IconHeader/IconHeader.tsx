import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FC } from "react";

interface Props {
	amount?: number;
	icon: string;
	title: string;
	to: string;
	border?: string;
}

const IconHeader: FC<Props> = ({ amount, icon, title, to, border }) => (
	<Link to={to} className="cursor-pointer">
		<div className="relative flex items-center space-x-2 group transition">
			<span className="material-symbols-outlined text-4xl">{icon}</span>
			<span
				className={`${
					border
						? "group-hover:border-0 text-2xl capitalize"
						: "group-hover:border-b text-2xl border-slate-900 capitalize"
				}`}
			>
				{title}
			</span>
			{amount !== 0 ? (
				<span className="text-2xl  group-hover:border-b border-slate-900 transition">
					({amount})
				</span>
			) : null}
		</div>
	</Link>
);

export default IconHeader;

IconHeader.propTypes = {
	amount: PropTypes.number,
};

IconHeader.defaultProps = {
	amount: 0,
};
