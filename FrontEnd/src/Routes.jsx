import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Products";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductDetails from "./products/details";
import MainLayout from "./layouts/MainLayout";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        {/*  mainlayout as element is set here to display in all pages */}
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/products">
          <Route index element={<Product />} />
          {/*just visit product page */}
          <Route path={":id"} element={<ProductDetails />} />
          {/*for any product id from product page so under another main rout */}
          {/* <Route path="/products/:id" element={<ProductDetails />} />{" "} */}
          {/* will use id to return and get in backend -- more in details.jsx */}
          {/* by setting under product route as main for any product id the is active propertie remains in product button*/}
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;

// or create a js file with route.js and write const HOME_ROUTE= "/" and const ABOUT_ROUTE="/about" then export multiple with export{HOME_ROUTE,ABOUT_ROUTE}
// then  to use js variable use {}            <Route path={ABOUT_ROUTE} element={<About />} />
