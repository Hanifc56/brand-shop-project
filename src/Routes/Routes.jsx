import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Error/ErrorPage";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Home from "../Pages/Home/Home";
import PrivetRoutes from "./PrivetRoutes";

import Brand from "../Pages/Home/Brand";
import ProductByBrand from "../Pages/Brands/ProductByBrand";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivetRoutes>
            <AddProduct></AddProduct>
          </PrivetRoutes>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivetRoutes>
            <MyCart></MyCart>
          </PrivetRoutes>
        ),
      },
      {
        path: "/brand",
        element: <Brand></Brand>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/brand/:brandName",
        element: <ProductByBrand></ProductByBrand>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
