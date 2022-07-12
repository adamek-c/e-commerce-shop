import PulseLoader from "react-spinners/PulseLoader";

const Loading = () => (
	<div className="max-w-screen-2xl mx-auto min-h-screen pt-20 flex justify-center">
		<span className="mt-24 px-8">
			<PulseLoader size={40} color="#6AD991" />
		</span>
	</div>
);

export default Loading;
