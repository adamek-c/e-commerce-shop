/* eslint-disable react/destructuring-assignment */
import { Component, ReactNode } from "react";

interface ErrorProps {
	children: ReactNode;
}

interface ErrorState {
	hasError: boolean;
}

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
	constructor(props: ErrorProps) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError() {
		return {
			hasError: true,
		};
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="max-w-screen-2xl mx-auto min-h-screen pt-20 flex justify-center">
					<span className="mt-24 px-8">
						<h2 className="text-6xl text-[#F25050] font-bold">
							Something went wrong!!
						</h2>
						<h3 className="text-4xl mt-12">
							We are very sorry if this happens again please contact support
						</h3>
					</span>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
