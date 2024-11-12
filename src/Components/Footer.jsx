import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex  justify-between items-center bg-green-500 text-white py-4 px-8 rounded-md">
      {/* Social Media Icons */}
      <ul className="flex items-center space-x-6 list-none text-3xl">
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="hover:text-blue-600 transition-colors duration-200" />
          </a>
        </li>
        <li>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="hover:text-green-600 transition-colors duration-200" />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <AiFillTikTok className="hover:text-black transition-colors duration-200" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-pink-600 transition-colors duration-200" />
          </a>
        </li>
      </ul>
      <div className="flex">
  <ul className="flex items-center space-x-6 uppercase">
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

    </div>
  );
};

export default Footer;
