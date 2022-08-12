import { FC } from "react";

interface Props {
	children: any;
}

const Container: FC<Props> = ({ children }) => (
	<div className="mt-12 max-w-screen-2xl mx-auto px-8">{children}</div>
);

export default Container;
