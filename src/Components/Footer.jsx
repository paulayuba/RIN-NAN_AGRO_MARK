import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div id='footer' className="flex justify-center flex-col md:flex-row gap-8 md:gap-56 items-center bg-green-500 text-white py-4 px-6 md:px-28 rounded-md">
      {/* Social Media Icons */}
      <ul className="flex items-center space-x-6 list-none text-3xl mt-6 md:mt-32">
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="hover:text-blue-600 transition-colors duration-200" />
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/message/4A5F3MKWL77AB1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="hover:text-green-600 transition-colors duration-200" />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@cletusdanladi?_t=8rNp1Bp14VT&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <AiFillTikTok className="hover:text-black transition-colors duration-200" />
          </a>
        </li>
        <li>
          <a href="https://help.instagram.com/697961817256175/?helpref=uf_share" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-pink-600 transition-colors duration-200" />
          </a>
        </li>
      </ul>

      {/* Navigation Links */}
      <ul className="text-lg md:text-xl uppercase space-y-2 md:space-y-4 mt-6 md:mt-0">
        <li className="hover:underline cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="hover:underline cursor-pointer">
          <a href="/about">About</a>
        </li>
        <li className="hover:underline cursor-pointer">
          <a href="/service">Service</a>
        </li>
        <li className="hover:underline cursor-pointer">
          <a href="/product">Product</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
