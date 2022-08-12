import Container from "../shared/Container/Container";
import ErrorContainer from "../shared/Error/ErrorContainer";

const Error = ({ error }: any) => (
	<Container>
		<ErrorContainer message={error} />
	</Container>
);

export default Error;
