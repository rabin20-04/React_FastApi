import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import ProductsCard from "../components/products/Card";
import ProductData from "../data";
import { getProducts } from "../api/product";
import "@fortawesome/fontawesome-free/css/all.min.css";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  if (loading)
    return (
      <div className="flex font-bold justify-center items-center h-screen w-screen">
        <i className="fa-solid fa-spinner fa-spin-pulse text-blue-500 text-6xl"></i>
      </div>
    );

  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="containÏer mx-auto px-4">
          <Title label="NEW Arrivals" />
          <div className=" py-4">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {productList.map((product) => (
                <ProductsCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default List;
