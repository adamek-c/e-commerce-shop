import { useEffect, useRef } from "react";

const useAutoFocusInput = (activeForm: boolean) => {
	const refFocus = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (refFocus) {
			refFocus.current?.focus();
		}
	}, [activeForm]);

	return refFocus;
};

export default useAutoFocusInput;
