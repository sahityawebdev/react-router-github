import React from "react";
import sunlogo from "../assets/sunlogo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="shadow-lg w-screen sticky top-0 bg-white">
      <nav className="py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="" className="flex items-center">
            <img src={sunlogo} alt="logo" className="mr-3 h-14" />
            <span className="text-xl uppercase font-bold text-orange-950">
              Prabhat
            </span>
          </a>
            
          <div className="order-2">
            <a
              href=""
              className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 mr-2">
            
              Login
            </a>

            <a
              href=""
              className="bg-orange-700 text-white hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2 mr-2">
            
              Get started
            </a>
          </div>

          <div className="lg:flex justify-between items-center w-full lg:w-auto lg:order-1 max-lg:hidden">
            <ul
              className="flex flex-col mt-4 font-medium lg:space-x-8 lg:mt-0 lg:flex-row"  id="mobile-menu-2">
             
            
              <li>
                <NavLink to="/" className={({isActive})=>` block py-2 pr-4 pl-3 hover:underline hover:text-orange-700 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:-bg-transparent lg:border-0 lh:p-0  ${isActive ? "text-orange-600":"text-gray-500"}`}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={({isActive})=>` block py-2 pr-4 pl-3 hover:underline hover:text-orange-700 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:-bg-transparent lg:border-0 lh:p-0  ${isActive ? "text-orange-600":"text-gray-500"}`}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={({isActive})=>` block py-2 pr-4 pl-3 hover:underline hover:text-orange-700 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:-bg-transparent lg:border-0 lh:p-0  ${isActive ? "text-orange-600":"text-gray-500"}`}>
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink to="/github" className={({isActive})=>` block py-2 pr-4 pl-3 hover:underline hover:text-orange-700 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:-bg-transparent lg:border-0 lh:p-0  ${isActive ? "text-orange-600":"text-gray-500"}`}>
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
