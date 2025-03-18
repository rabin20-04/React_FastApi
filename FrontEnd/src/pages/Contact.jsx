import React from "react";
import { FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-amber-100 text-blue-600 h-screen">
      <div className="h-full w-full flex flex-col gap-8 items-center justify-center overflow-hidden">
        <p className="text-3xl text-center text-black mb-4">
          Thank you for visiting the store!
        </p>

        <div className="flex space-x-8">
          <a
            href="https://github.com/rabin20-04/React_FastApi.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-6xl hover:text-gray-400 text-black"
          >
            <FaGithub />
          </a>

          <a
            href="/"
            rel="noopener noreferrer"
            className="text-6xl hover:text-gray-400 text-black"
          >
            <AiFillHome />
          </a>
        </div>

        <div>
          <Link
            to={"/products"}
            className="flex items-center justify-center w-fit hover:gap-2"
          >
            <button className="bg-teal-700 text-white rounded-xl hover:bg-green-900 p-3 transition-all duration-300 ease-in-out rounded-tr-none">
              Explore Store
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;