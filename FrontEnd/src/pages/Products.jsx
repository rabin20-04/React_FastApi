import React from "react";
import Navbar from "../components/Navbar";
import List from "../products/list";

const Products = () => {
  return (
    <><div className="h-[100vh]">
      <List />
      </div>
      {/* <Navbar /> because added to main layout  */}
      {/* <div>This is from Products</div> */}
    </>
  );
};

export default Products;
