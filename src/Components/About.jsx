import React from 'react';
import aboutpage from "../assets/aboutpage.jpg";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center px-4 py-8" href="About Us">
      <h2 className="text-4xl font-semibold text-green-500 py-4 text-center">About Us</h2>
      <div className="flex justify-center mb-20">
        <img className="max-w-full h-[700] rounded-lg" src={aboutpage} alt="" />
      </div>
    </div>
  );
};

export default About;
