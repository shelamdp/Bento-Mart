import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../views/Home";
import Detail from "../views/Detail";
import App from "../App";
import Register from "../views/Register";
import Login from "../views/Login";
import Menu from "../views/Menu";
import Outlet from "../views/Outlet";
import Promotion from "../views/Promotion";
import Cooporate from "../views/Coorporate";
import News from "../views/News&Event";
import Contact from "../views/Contact";


export default createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/detail/:id",
                element: <Detail/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/menu",
                element: <Menu/>
            },
            {
                path: "/outlet",
                element: <Outlet/>
            },
            {
                path: "/promotion",
                element: <Promotion/>
            },
            {
                path: "/coorporate",
                element: <Cooporate/>
            },
            {
                path: "/news-event",
                element: <News/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
        ]
    }
    
])