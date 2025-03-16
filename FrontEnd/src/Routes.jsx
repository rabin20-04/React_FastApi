import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import List from "./products/List"; // 
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProductDetails from "./products/details";
import MainLayout from "./layouts/MainLayout";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/products">
          <Route index element={<List category="New Arrivals" />} /> {/* Changed to New Arrivals */}
          <Route path=":id" element={<ProductDetails />} />
          <Route path="electronics">
            <Route index element={<List category="Electronics" />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="clothes"> {/* Added explicit 'clothes' path for clarity */}
            <Route index element={<List category="Clothes" />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="new-arrivals">
            <Route index element={<List category="New Arrivals" />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;

// or create a js file with route.js and write const HOME_ROUTE= "/" and const ABOUT_ROUTE="/about" then export multiple with export{HOME_ROUTE,ABOUT_ROUTE}
// then  to use js variable use {}            <Route path={ABOUT_ROUTE} element={<About />} />
