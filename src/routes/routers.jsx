import { createBrowserRouter } from "react-router-dom";
import FeedData from "../pages/FeedData";
// import LoginAuth from "../components/LoginAuth";
import Login from "../pages/Login";
import SignIn from "../pages/SignUp";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
    },
    {
        path:"/signup",
        element:<SignIn/>
    },
    {
        path:'/feed',
        element:<FeedData/>
    }
])
