import PulseLoader from "react-spinners/PulseLoader";
import Container from "../Container/Container";

const Loading = () => (
	<Container>
		<div className="flex justify-center">
			<span className="mt-20 px-8">
				<PulseLoader size={30} color="#6AD991" />
			</span>
		</div>
	</Container>
);

export default Loading;
