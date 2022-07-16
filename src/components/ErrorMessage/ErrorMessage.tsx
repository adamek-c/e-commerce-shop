import Container from "../Container/Container";

const Error = ({ error }: any) => (
	<Container>
		<section className="flex justify-center pt-20">
			<h2 className="text-5xl lg:text-6xl text-[#F25050] font-bold">{error}</h2>
		</section>
	</Container>
);

export default Error;
