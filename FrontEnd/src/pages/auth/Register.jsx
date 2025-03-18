import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  return (
    <>
      <section className="py-12 ">
        <div className="max-w-screen-xl mx-auto px-12 h-[70vh]">
          <div className="  flex flex-col gap-y-4 lg:flex-row  items-center justify-around  px-16 h-full ">
            <div className="w-1/2">
              <div className="text-4xl text-[#5c6bf7]">
                Welcome to
                <p className="text-7xl text-blue-500 mt-2 pt-2">
                  KOOL <span className="text-violet-700">STORE</span>
                </p>
              </div>
              <Link
                to={"/auth/login"}
                className=" text-xs mt-1 flex gap-1 items-center hover:gap-2 w-fit hover:text-yellow-400"
              >
                <span className=" border-red-300 border-b-2 text-black ">
                  Already have an account ?
                </span>
                <span className="font-semibold ">
                  <FaArrowRight />
                </span>
              </Link>
            </div>

            <RegisterForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
