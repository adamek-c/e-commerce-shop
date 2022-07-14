interface Input {
	id: number;
	from: number;
	to: number;
	name: string;
}

const inputs: Input[] = [
	{
		id: 1,
		from: 1,
		to: 15,
		name: "price-fifteen",
	},
	{
		id: 2,
		from: 15,
		to: 50,
		name: "price-fifty",
	},
	{
		id: 3,
		from: 50,
		to: 100,
		name: "price-hundred",
	},
	{
		id: 4,
		from: 100,
		to: 125,
		name: "one-hundred-and-twenty-five",
	},
	{
		id: 5,
		from: 125,
		to: 999,
		name: "thousand",
	},
];

export default inputs;
