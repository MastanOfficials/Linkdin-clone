import { createBrowserRouter } from "react-router-dom";
// import LoginAuth from "../components/LoginAuth";
import Login from "../pages/Login";
import Rigister from "../pages/Rigister";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
        path:"/rigister",
        element:<Rigister/>
    }
])
