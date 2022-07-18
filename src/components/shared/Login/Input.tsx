import { FC, useId } from "react";

interface Props {
	props: string;
}

const Input: FC<Props> = ({ props }) => {
	const uniqueId = useId();
	return (
		<>
			<label htmlFor={`${uniqueId}-${props}`}>
				<span className="after:content-['*'] after:ml-0.5 after:text-[#F25050] capitalize">
					{props}
				</span>
			</label>
			<input
				id={`${uniqueId}-${props}`}
				name={props}
				type={props}
				className="border-b focus:outline-none pb-2 focus:border-b-black bg-inherit"
			/>
		</>
	);
};

export default Input;
