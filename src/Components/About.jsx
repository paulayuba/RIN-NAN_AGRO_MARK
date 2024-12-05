import React from 'react';
import aboutImage2 from "../assets/aboutImage2.jpg";

const About = () => {
  return (
    <div id="/about" className="w-full flex flex-col items-center px-10 py-8">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-semibold text-green-500 py-4 text-center">
        About Us
      </h2>

      {/* Images and Text Section */}
      <div className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-6 lg:gap-10 p-6">
        {/* Image */}
        <img
          className="w-full lg:w-1/2 h-64 lg:h-auto object-cover"
          src={aboutImage2}
          alt="About Page"
        />

        {/* Text */}
        <p className="text-base font-semibold sm:text-lg text-gray-700 text-justify md:text-2xl lg:w-1/2">
          At RIN'NAN AGRO MART NIGERIA LIMITED, we believe that agriculture is
          the backbone of the nation's economy. Our mission is to empower
          farmers with the tools, products, and knowledge they need to succeed.
          From providing top-quality agrochemicals to offering expert consultation 
          and support, we are dedicated to ensuring the success of our clients and
          the sustainability of their farming practices. Our goal is to empower Nigerian farmers with the best agricultural 
          inputs and services, helping them increase productivity while 
          promoting environmental responsibility.
        </p>
      </div>
    </div>
  );
};

export default About;
