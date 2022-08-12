"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Search = ({ handleOpenSearch }) => (<div className="absolute t-0 right-0 left-0 h-full w-full bg-white z-20  p-10">
		<div className="max-w-screen-xl mx-auto flex flex-row space-x-10 items-center">
			<input autoFocus type="text" id="search" name="search" placeholder="Search..." className="py-5 text-2xl mt-4 w-full border-b focus:outline-none pb-2 focus:border-b-black bg-inherit"/>
			<button type="button" className="material-symbols-outlined ml-auto cursor-pointer" onClick={handleOpenSearch}>
				close
			</button>
		</div>
	</div>);
exports.default = Search;
