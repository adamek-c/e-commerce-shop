/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, FC, SetStateAction, useEffect } from "react";

interface Props {
	setAlert: Dispatch<SetStateAction<boolean>>;
}

const Alert: FC<Props> = ({ setAlert }) => {
	useEffect(() => {
		const time = setTimeout(() => {
			setAlert(false);
		}, 1000);
		return () => clearTimeout(time);
	}, []);

	return (
		<section>
			<div className="flex space-x-4 mt-10 items-center border py-4 px-10 border-[#6AD991]">
				<span className="material-symbols-outlined text-[#6AD991]">
					check_circle
				</span>
				<div className="text-2xl">Added Item</div>
			</div>
		</section>
	);
};

export default Alert;
