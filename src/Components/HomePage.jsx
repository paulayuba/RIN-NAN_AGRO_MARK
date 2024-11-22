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
              className="outline-double outline-3 outline-offset-2 rounded-full py-3 px-8 bg-white text-black font-bold outline-green-700"
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

    </div>
  );
};

export default HomePage;
