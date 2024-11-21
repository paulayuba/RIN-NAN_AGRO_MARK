import React from 'react';
import home1 from "../assets/home1.jpg"
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';

const HomePage = () => {
  return (
    <div id="about" className="w-full flex flex-col items-center px-4 py-8">
      <h2 className="text-3xl sm:text-4xl font-semibold text-green-500 py-4 text-center">
        About Us
      </h2>

      {/* Text and Image Section */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 mb-20 p-6">
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center text-center mt-20 lg:text-left lg:w-1/2">
          <p className="text-green-300 text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed">
            Founded in Year 2020,
            <span className="text-green-900 block">RIN'NAN AGRO MART NIGERIA LIMITED</span>
            was established with a vision to support the Nigerian agricultural sector by providing reliable and high-quality agrochemicals and agricultural services.
          </p>
          <div className="mt-6">
            <a
              href="/about"
              className="bg-green-500 text-white py-3 px-6 rounded-md font-medium hover:bg-white hover:text-green-500 hover:border shadow-sm transition-colors"
            >
              About Us
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 lg:w-1/2">
          <img
            className="w-full h-auto rounded-lg object-cover"
            src={home1}
            alt="About Page"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div
        id="footer"
        className="w-full bottom-0 flex justify-center flex-col md:flex-row gap-8 md:gap-56 items-center bg-green-500 text-white py-4 px-6 md:px-28 rounded-md"
      >
        {/* Social Media Icons */}
        <ul className="flex items-center space-x-6 list-none text-3xl mt-6 md:mt-32">
          <li>
            <a
              href="https://web.facebook.com/cletus.danladi?_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="hover:text-blue-600 transition-colors duration-200" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/message/4A5F3MKWL77AB1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="hover:text-green-600 transition-colors duration-200" />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@cletusdanladi?_t=8rNp1Bp14VT&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <AiFillTikTok className="hover:text-black transition-colors duration-200" />
            </a>
          </li>
          <li>
            <a
              href="https://help.instagram.com/697961817256175/?helpref=uf_share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
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
    </div>
  );
};

export default HomePage;
