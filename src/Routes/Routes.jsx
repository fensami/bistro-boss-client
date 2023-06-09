import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
// import Home from "../Pages/Home1/Home/Home";
// import Home from '../Pages/HomePage/Home'
import Home from '../Pages/HomePage/Home/Home'
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/OrderPage/Order/Order";
import Login from "../Pages/LoginPage/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Components/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoardPages/Mycart/MyCart";
import AllUsers from "../Pages/DashBoardPages/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
             path: 'allUsers',
             element: <AllUsers></AllUsers>   
            }
        ]
    }
])