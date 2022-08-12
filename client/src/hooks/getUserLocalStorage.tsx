/* eslint-disable consistent-return */
const useUserName = () => {
	try {
		const { user } = JSON.parse(localStorage.getItem("user") || "");
		if (user) {
			return user.name;
		}
	} catch (error) {
		return null;
	}
};

export default useUserName;
