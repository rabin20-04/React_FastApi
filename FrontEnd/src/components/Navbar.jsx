import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiKasasmart } from "react-icons/si";
import { GiSpikedDragonHead } from "react-icons/gi";const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "block py-2 px-3 text-blue  md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      : "text-green";
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);
  return (
    <>
      <nav className="bg-amber-50 border-gray-200 border z-50 relative sticky top-0 z-50">
        <div className=" text-violet-800 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <div className="flex items-center gap-3 ">
          <Link to={"/"}> <span className="text-3xl ">
          <GiSpikedDragonHead /></span>
          </Link>{" "}
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-violet-800 text-2xl font-semibold whitespace-nowrap ">
              KoolMart
            </span>
          </a></div>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={() => setIsMobileMenuHidden(!isMobileMenuHidden)}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=2770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user photo"
              />
            </button>
            <div
              className={`z-2   my-5 mt-15  text-base list-none absolute top-7 right-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm ${
                isMobileMenuHidden ? "hidden " : ""
              }`}
              id="user-dropdown"
            >
              <div className="px-4 py-3 z-5">
                <span className="block text-sm text-gray-900 dark:text-white">
                  USER NAME
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  username@email.com
                </span>
              </div>
              <ul className="py-2 " aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Settings
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              {/* <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg> */}
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700 active text-gray-900">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className={navLinkClass}>
                  Product
                </NavLink>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
