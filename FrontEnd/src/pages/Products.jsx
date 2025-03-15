// src/pages/Products.jsx
import React from "react";
import List from "../products/list";

const Products = ({ category = "Clothes" }) => {
  return (
    <div className="h-[100vh]">
      <List category={category} />
    </div>
  );
};

export default Products;