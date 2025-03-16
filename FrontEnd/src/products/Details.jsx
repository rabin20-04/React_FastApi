import React, { useEffect, useState } from "react";
import white1 from "../../src/assets/img/white1.png";
import white4 from "../../src/assets/img/white4.png";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { useParams, useLocation } from "react-router-dom";
import Title from "../components/Title";
import { getProductsById, getElectronicsById } from "../api/product";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const isElectronicsRoute = location.pathname.startsWith(
    "/products/electronics"
  );

  useEffect(() => {
    setLoading(true);
    const fetchFunction = isElectronicsRoute
      ? getElectronicsById
      : getProductsById;
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
    <>
      <section className="py-24 bg-gray-100 h-screen overflow-auto  ">
        <div className="container mx-auto px-4 ">
          <div className="flex gap-4 flex-col  lg:flex-row lg:justify-around items-center">
            {/* Product Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={product.image_url ?? white4}
                alt={product.title || "Product Image"}
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2">
              <div className="flex mt-2 text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p className="pt-2">
                <Title label={product.title || "Classic Blue Denim Jacket"} />
              </p>
              <p className="text-justify py-2">
                {product.description && product.description.trim() !== ""
                  ? product.description
                  : "Stay warm and trendy with this versatile jacket, perfect for any occasion. Made with high-quality, breathable fabric, it ensures all-day comfort while keeping you protected from the elements. Its modern design features sleek lines and a tailored fit, making it an ideal choice for urban explorers and outdoor enthusiasts alike. Add this timeless piece to your wardrobe and make a statement wherever you go!"}
              </p>
              <h1 className="font-bold text-xl mb-2 capitalize text-blue-700">
                {product.type || "Classic Jacket"}
              </h1>

              <span className="text-2xl mt-1 pe-1">
                {product.price ? Math.floor(product.price * 0.8) : "N/A"}
              </span>
              <span className="line-through text-slate-500 text-sm ">
                {product.price ?? "N/A"}
              </span>

              <button
                className="bg-teal-700 px-2 py-1 gap-2 text-white rounded hover:bg-green-900 flex items-center mt-2"
                onClick={handleAddToCart}
              >
                Add to cart
                <FaCartPlus />
              </button>
              <p className="text-xs p-2 text-gray-500">
                Enjoy 20% discount on new arrivals
              </p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
};

export default ProductDetails;
