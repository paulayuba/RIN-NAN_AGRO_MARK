import React from 'react';
import aboutpage from "../assets/aboutpage.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h2 className="text-4xl font-semibold text-green-500 py-4 text-center">About Us</h2>
      <div className="flex justify-center mb-20">
        <img className="max-w-full h-auto rounded-lg" src={aboutpage} alt="" />
      </div>
    </div>
  );
};

export default About;
