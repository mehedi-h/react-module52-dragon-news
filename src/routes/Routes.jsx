import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Shared/Home/Home";
import Login from "../pages/Login/Login";




const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: "/",
            element: <Home></Home>
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
        }
    ]
  }  
]);

export default routes;
