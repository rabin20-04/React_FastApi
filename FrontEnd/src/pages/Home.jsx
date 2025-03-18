import React from "react";
import Navbar from "../components/Navbar";
import backimg from "../../src/assets/img/clothing-3.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div
        className="h-screen w-screen bg-no-repeat bg-cover bg-center fixed"
        style={{
          backgroundImage: `url(${backimg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-100 "></div>
        <div className="hero-content text-neutral-content text-center mt-16 pt-12 px-12 flex flex-row  items-center ">
          <div className="max-w-md items-center">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 pt-8">
              {" "}
              Discover an exclusive collection of premium-quality products
              designed to elevate your style and comfort. Whether you’re looking
              for timeless classics or modern trends, we have something for
              everyone. Our carefully curated selection features the finest
              materials and craftsmanship, ensuring that every purchase is an
              investment in quality.
            </p>
            <Link
              to={"/products"}
              className="   items-center hover:gap-2 w-fit hover:text-yellow-400"
            >
              <button className=" bg-teal-700 text-white rounded-xl hover:bg-green-900  p-2  rounded-tr-none">
                Explore Store
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
