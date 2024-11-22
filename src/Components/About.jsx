import React from 'react';
import aboutpage from "../assets/aboutpage.jpg";
import aboutimage from "../assets/aboutimage.jpg";
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';

const About = () => {
  return (
    <div id="about" className="w-full flex flex-col items-center px-10 py-8">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-green-500 py-4 text-center">
        About Us
      </h2>

      {/* Images Section */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 mb-20 border rounded-md shadow-2xl p-4">
        <img
          className="w-full lg:w-1/2 h-auto rounded-lg object-cover"
          src={aboutpage}
          alt="About Page"
        />
        <img
          className="w-full lg:w-1/2 h-auto rounded-lg object-cover"
          src={aboutimage}
          alt="About Image"
        />
      </div>

      {/* Footer Section */}
    </div>
  );
};

export default About;
