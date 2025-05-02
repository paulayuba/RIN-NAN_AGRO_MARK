
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
          <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fcletusdanladishikwam%2F%3Figsh%3DbDI1cm9tdnR6bGd2%26fbclid%3DIwY2xjawG-gf5leHRuA2FlbQIxMAABHavpZlqy8aUJfepYSWyQb9YYkGW4lIMm6N6vT384ZeblV3urECCkBYgsLw_aem_B2IBXhpkc-SITYsRx30tzg&is_from_rle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-pink-600 transition-colors duration-200" />
          </a>
        </li>
      </ul>

      {/* Navigation Links */}
      <ul className="text-lg md:text-xl uppercase space-y-2 md:space-y-4 mt-6 flex space-x-6 sm:mt-10">
        <li className="hover:underline cursor-pointer mt-4">
          <a href="#">Home</a>
        </li>
        <li className="hover:underline cursor-pointer">
          <a href="#About">About</a>
        </li>
        <li className="hover:underline cursor-pointer">
          <a href="#Service">Service</a>
        </li>
        <li className="hover:underline cursor-pointer">
          <a href="#Product">Product</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
