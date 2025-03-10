import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar /> {/*fixed for all pages*/}
      <Outlet /> 
      {/* to display content of current page ie content of about page in routes childrens along with Navbar  */}
    </>
  );
};

export default MainLayout;
