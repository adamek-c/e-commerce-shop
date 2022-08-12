interface Props {
	message: string;
}

const Error = ({ message }: Props) => (
	<section className="flex justify-center pt-20">
		<h2 className="text-5xl lg:text-6xl text-[#F25050] font-bold">{message}</h2>
	</section>
);

export default Error;
