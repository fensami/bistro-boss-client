import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <p>loading...</p>
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} replace to='/login'></Navigate>
};

export default PrivateRoutes;