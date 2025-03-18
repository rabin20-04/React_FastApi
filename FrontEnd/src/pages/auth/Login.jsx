import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import Register from "./Register";
import { FaArrowRight } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <section className="py-12 ">
        <div className="max-w-screen-xl mx-auto px-12 h-[70vh]">
          <div className="  flex flex-col gap-y-2 lg:flex-row  items-center justify-around   px-16 h-full ">
            <div className="w-1/2  mb-5">
              <div className="text-4xl text-[#5c6bf7]">
                Welcome to
                <p className="text-7xl text-blue-500 mt-2 pt-2">
                  KOOL <span className="text-violet-700">STORE</span>
                </p>
              </div>
              <Link
                to={"/auth/register"}
                className="  text-xs mt-2 flex gap-1 items-center hover:gap-2 w-fit hover:text-yellow-400"
              >
                <span className=" border-red-300 border-b-2 text-black ">
                  Don't have an account ?
                </span>
                <span className="font-semibold ">
                  <FaArrowRight />
                </span>
              </Link>
            </div>

            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
