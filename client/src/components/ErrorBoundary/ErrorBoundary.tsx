/* eslint-disable react/destructuring-assignment */
import { Component, ReactNode } from "react";
import Container from "../shared/Container/Container";
import ErrorContainer from "../shared/Error/ErrorContainer";

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
				<Container>
					<div className="flex justify-center">
						<ErrorContainer message="Sorry something went wrong" />
					</div>
				</Container>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
