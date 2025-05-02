"use client";

import React, { useState } from "react";
import logo1 from "../assets/logo1.jpg"; // Make sure the path is correct
import { IoMenuSharp } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-green-500 fixed top-0 w-full left-0 py-2 px-4 text-white border-t-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo1}
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>


        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-3xl z-50 relative">
          {isOpen ? <VscClose /> : <IoMenuSharp />}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-6 font-medium text-xl absolute md:static bg-green-500 w-full left-0 top-full md:top-auto mt-4 md:mt-0 md:w-auto transition-all duration-300 z-40 px-4 pb-4 md:pb-0`}
        >
          <li className="py-1 underline hover:underline cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="#About">About</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="#Service">Service</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="#Product">Product</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="#ContactUS">Contact Us</a>
          </li>

          {/* Mobile-only Contact Button */}
          <li className="block md: mt-2">
            <a
              href="#ContactUS"
              className="outline-double outline-2 rounded-full py-3 px-6 bg-white text-green-500 font-bold outline-green-700"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
