"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useAutoFocusInput = (activeForm) => {
    const refFocus = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        var _a;
        if (refFocus) {
            (_a = refFocus.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [activeForm]);
    return refFocus;
};
exports.default = useAutoFocusInput;
