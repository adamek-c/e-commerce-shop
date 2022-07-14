/* eslint-disable jsx-a11y/click-events-have-key-events */

import { FC } from "react";

/* eslint-disable jsx-a11y/no-static-element-interactions */
interface Props {
	handleOpenSearch: () => void;
}

const Search: FC<Props> = ({ handleOpenSearch }) => (
	<div className="absolute t-0 right-0 left-0 h-full w-full bg-white z-20  p-10">
		<div className="max-w-screen-xl mx-auto flex flex-row space-x-10 items-center">
			<input
				type="text"
				id="search"
				name="search"
				placeholder="Search..."
				className="border p-5 text-2xl mt-4 w-full"
			/>
			<div
				className="material-symbols-outlined ml-auto cursor-pointer"
				onClick={handleOpenSearch}
			>
				close
			</div>
		</div>
	</div>
);

export default Search;
