import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Shared/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";




const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('news.json')
        },
        {
            path: "/about"
        },
        {
            path: "/career"
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
    ]
  }  
]);

export default routes;
