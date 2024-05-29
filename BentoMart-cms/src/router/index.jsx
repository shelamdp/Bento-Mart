import { createBrowserRouter, redirect, RouterProvider, useLocation } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Register from "../views/Register";
import ListMenu from "../views/ListMenu";
import ListCategory from "../views/ListCategory";
import AddMenu from "../views/AddMenu";
import AddCategory from "../views/AddCategory";
import App from "../App";
import EditMenu from "../views/EditMenu";
import EditCategory from "../views/EditCategory";

export default createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      if (!localStorage.access_token) {
        // console.log("=======")
        return redirect("/login")
      } 
      return null
    },
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/menu",
        element: <ListMenu />,
      },
      {
        path: "/category",
        element: <ListCategory />,
      },
      {
        path: "/add-menu",
        element: <AddMenu />,
      },
      {
        path: "/edit-menu/:id",
        element: < EditMenu />,
      },
      {
        path: "/add-category",
        element: <AddCategory />,
      },
      {
        path: "/edit-category/:id",
        element: <EditCategory />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]);