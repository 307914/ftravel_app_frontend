import { useEffect, useState } from "react";
import { useUserdata } from "./context"
import { Navigate, Outlet, useLocation, useNavigate } from "react-router";

const ProtectedComponent = () => {
    const [navigatetologin, setNavigateToLogin] = useState(false);
    const { userdata, isLoading, message } = useUserdata();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    console.log({ pathname });


    useEffect(() => {
        if (isLoading === false) {
            if (userdata) {
                setNavigateToLogin(false);
            }
            else {
                setNavigateToLogin(true);
            }
        }

    }, [message, isLoading])

    if (navigatetologin === true) {
        console.log("the error is in this");
        return <Navigate to='/login' state={pathname} />

    }
    else if (navigatetologin === false) {
        return <Outlet />
    }
    return null;

}

export default ProtectedComponent;