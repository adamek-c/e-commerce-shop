const getUniqueValue = (data: (string | undefined)[], key: string) => {
	let unqiueValues;
	if (key) {
		let unique = new Set(data);
		unqiueValues = Array.from(unique).sort();
	}
	return unqiueValues;
};

export default getUniqueValue;
