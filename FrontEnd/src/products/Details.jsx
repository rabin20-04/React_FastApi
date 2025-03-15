import React, { useEffect, useState } from "react";
import iphone15 from "../../src/assets/img/iphone15.png";
import white1 from "../../src/assets/img/white1.png";
import white4 from "../../src/assets/img/white4.png";
import { FaCartPlus, FaStar, FaStarHalf } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { getProductsById } from "../api/product";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductsById(id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex font-bold justify-center items-center h-screen w-screen">
        <i className="fa-solid fa-spinner fa-spin-pulse text-blue-500 text-6xl"></i>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen w-screen text-red-500">
        <p>Product not found. Please try again later.</p>
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
      <section className="py-12 bg-gray-100 h-screen">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 flex-col lg:flex-row justify-around items-center">
            <div className="h-[70vh] w-auto flex justify-center items-center">
              <img
                src={product.image_url ?? iphone15} 
                alt={product.name}
                className="object-contain w-full h-full max-h-[70vh] max-w-[100%]"
              />
            </div>

            <div className="w-1/2">
              <div className="flex mt-2 text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p className="pt-2">
                <Title label={product.name} />
              </p>
              <p className="text-justify py-2">
                {product.description && product.description.trim() !== "string"
                  ? product.description
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem quas dolores inventore aliquam veniam laudantium optio itaque, consequuntur, at aperiam nesciunt nemo, a mollitia corporis? Molestias porro deleniti praesentium repudiandae similique dolorum, amet consequuntur nobis reprehenderit maxime, veniam earum?"}
              </p>
              <p>
                <h1 className="font-bold text-xl mb-2">{product.type}</h1>
                <span className="text-2xl mt-2 pe-1">
                  {product.price ? Math.floor(product.price * 0.8) : "N/A"}
                </span>
                <span className="line-through text-slate-500 text-sm">
                  {product.price}
                </span>
              </p>
              <button
                className="bg-teal-700 px-2 py-1 gap-2 text-white rounded hover:bg-green-900 flex items-center"
                onClick={handleAddToCart}
              >
                Add to cart
                <FaCartPlus />
              </button>
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
