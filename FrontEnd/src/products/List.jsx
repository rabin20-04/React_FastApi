// src/products/list.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import ProductsCard from "../components/products/Card";
import { getProducts, getElectronics } from "../api/product";
import "@fortawesome/fontawesome-free/css/all.min.css";

const List = ({ category = "Clothes" }) => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchFunction = selectedCategory === "Clothes" ? getProducts : getElectronics;
        const response = await fetchFunction();
        setProductList(response.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    navigate(newCategory === "Clothes" ? "/products" : "/products/electronics");
  };

  if (loading) {
    return (
      <div className="flex font-bold justify-center items-center h-screen w-screen">
        <i className="fa-solid fa-spinner fa-spin-pulse text-blue-500 text-6xl"></i>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section className="py-8 bg-gray-100 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => handleCategoryChange("Clothes")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedCategory === "Clothes"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Clothes
          </button>
          <button
            onClick={() => handleCategoryChange("Electronics")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedCategory === "Electronics"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Electronics
          </button>
        </div>

        <Title label={selectedCategory === "Clothes" ? "New Arrivals" : "Electronics"} />
        <div className="py-4">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productList.length > 0 ? (
              productList.map((product) => (
                <ProductsCard key={product.id} {...product} />
              ))
            ) : (
              <p>No {selectedCategory.toLowerCase()} available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;