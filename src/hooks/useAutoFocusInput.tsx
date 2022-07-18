import { useEffect, useRef } from "react";

const useAutoFocusInput = () => {
	const refFocus = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (refFocus) {
			refFocus.current?.focus();
		}
	}, []);

	return refFocus;
};

export default useAutoFocusInput;
