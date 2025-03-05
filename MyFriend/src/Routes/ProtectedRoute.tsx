import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if(token){
        return(
        <>
            <Outlet />
        </> 
    )
    }
    useEffect(() => {
        navigate("/login");
    },[])
    
}
export default ProtectedRoute;