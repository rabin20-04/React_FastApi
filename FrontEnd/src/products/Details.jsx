// src/products/details.jsx
import React, { useEffect, useState } from "react";
import white1 from "../../src/assets/img/white1.png";
import white4 from "../../src/assets/img/white4.png";
// import white4 from "../../src/assets/img/iphone15.png";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { useParams, useLocation } from "react-router-dom";
import Title from "../components/Title";
import { getProductsById, getElectronicsById } from "../api/product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const isElectronicsRoute = location.pathname.startsWith("/products/electronics");

  useEffect(() => {
    setLoading(true);
    const fetchFunction = isElectronicsRoute ? getElectronicsById : getProductsById;
    fetchFunction(id)
      .then((response) => {
        setProduct(response.data || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError("Failed to load product details. Please try again later.");
        setLoading(false);
      });
  }, [id, isElectronicsRoute]);

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

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen w-screen text-red-500">
        Product not found. Please try again later.
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
    });
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex gap-6 flex-col lg:flex-row justify-around items-center">
          <div className="h-[70vh] w-auto flex justify-center items-center overflow-hidden bg-white">
            <img
              src={product.image_url ?? white4}
              alt={product.title || "Product Image"}
              className="w-full h-96 object-contain bg-white transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex mt-2 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <p className="pt-2">
              <Title label={product.title} />
            </p>
            <p className="text-justify py-2">
              {product.description && product.description.trim() !== "" ? (
                product.description
              ) : (
                "Stay warm and trendy with this versatile jacket, perfect for any occasion. Made with high-quality, breathable fabric, it ensures all-day comfort while keeping you protected from the elements. Its modern design features sleek lines and a tailored fit, making it an ideal choice for urban explorers and outdoor enthusiasts alike. Add this timeless piece to your wardrobe and make a statement wherever you go!"
              )}
            </p>
            <p>
              <h1 className="font-bold text-xl mb-2 capitalize">{product.type}</h1>
              <span className="text-2xl pe-1">
                {product.price ? Math.floor(product.price * 0.8) : "N/A"}
              </span>
              <span className="line-through text-slate-500 text-sm">
                {product.price ?? "N/A"}
              </span>
            </p>
            <button
              className="bg-red-700 px-4 py-2 gap-2 text-white rounded hover:bg-red-800 flex items-center"
              onClick={handleAddToCart}
            >
              Add to cart
              <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;