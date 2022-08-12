/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router";
import useUserName from "../hooks/getUserLocalStorage";

const ProtectedUserPage = () => {
	const user = useUserName();

	return <>{!user ? <Navigate to="/" replace /> : <Outlet />};</>;
};

export default ProtectedUserPage;
