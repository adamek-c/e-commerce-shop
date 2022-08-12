"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react-hooks/exhaustive-deps */
const react_1 = require("react");
const Alert = ({ setAlert }) => {
    (0, react_1.useEffect)(() => {
        const time = setTimeout(() => {
            setAlert(false);
        }, 1000);
        return () => clearTimeout(time);
    }, []);
    return (<section>
			<div className="flex space-x-4 mt-10 items-center border py-4 px-6 border-[#6AD991]">
				<span className="material-symbols-outlined text-[#6AD991]">
					check_circle
				</span>
				<div className="text-2xl">Added Item</div>
			</div>
		</section>);
};
exports.default = Alert;
