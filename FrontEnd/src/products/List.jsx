import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Title from "../components/Title";
import ProductsCard from "../components/products/Card";
import { getProducts, getElectronics, getNewArrivals } from "../api/product";
import "@fortawesome/fontawesome-free/css/all.min.css";

const List = ({ category = "New Arrivals" }) => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState("new-arrivals");
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const initialCategory = location.pathname.includes("electronics")
    ? "Electronics"
    : location.pathname.includes("clothes")
    ? "Clothes"
    : location.pathname.includes("new-arrivals")
    ? "New Arrivals"
    : category;
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products for category:", selectedCategory);
        let fetchFunction;
        if (selectedCategory === "Clothes") {
          fetchFunction = getProducts;
        } else if (selectedCategory === "Electronics") {
          fetchFunction = getElectronics;
        } else if (selectedCategory === "New Arrivals") {
          fetchFunction = getNewArrivals;
        }
        const response = await fetchFunction();
        console.log("API Response:", response.data);
        setProductList(response.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error.response?.data || error.message);
        setError(error.response?.data?.message || "Failed to load products. Please try again.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    navigate(
      newCategory === "Clothes"
        ? "/products/clothes"
        : newCategory === "Electronics"
        ? "/products/electronics"
        : "/products/new-arrivals"
    );
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
    <section className="py-8 bg-gray-100">
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
          <button
            onClick={() => handleCategoryChange("New Arrivals")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedCategory === "New Arrivals"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            New Arrivals
          </button>
        </div>

        <Title
          label={
            selectedCategory === "Clothes"
              ? "Clothes"
              : selectedCategory === "Electronics"
              ? "Electronics"
              : "New Arrivals"
          }
        />
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