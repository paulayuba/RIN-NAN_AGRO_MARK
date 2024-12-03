import React, { useState } from 'react';
import logo from "../assets/logo.webp";
import { IoMenuSharp } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-green-500 fixed top-0 w-full left-0 py-4 px-2 text-white flex justify-between items-center border-b-4 border-t-4 z-50">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <img className="w-28 h-24 rounded-full pr-1" src={logo} alt="Logo" />

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-3xl">
          {isOpen ? <VscClose /> : <IoMenuSharp />}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-6 font-medium text-xl absolute md:static bg-green-500 w-full left-0 top-full md:top-auto mt-4 md:mt-0 md:w-auto`}
        >
          <li className="py-1 hover:underline cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="/about">About</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="/service">Service</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="/product">Product</a>
          </li>
          <li className="py-1 hover:underline cursor-pointer">
            <a href="/footer">Contact</a>
          </li>
        </ul>

        {/* Login Button */}
        <a
          href="/contact"
          className="outline-double outline-3 outline-offset-2 rounded-full py-3 px-8 bg-white text-green-500 font-bold outline-green-700"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
