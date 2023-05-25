import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
// import Home from "../Pages/Home1/Home/Home";
// import Home from '../Pages/HomePage/Home'
import Home from '../Pages/HomePage/Home/Home'
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/OrderPage/Order/Order";
import Login from "../Pages/LoginPage/Login";

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
            }
        ]
    }
])