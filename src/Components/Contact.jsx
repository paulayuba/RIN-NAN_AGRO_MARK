import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="/contact" className="text-black py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Contact Info Section */}
        <h2 className="text-4xl text-black font-bold text-center mt-8">Contact Us</h2>
        
        <div className="mt-6 flex flex-col items-center space-y-6">
          <div className="flex items-center">
            <FaPhone className="text-green-400 mr-4 text-xl" />
            <span className="text-black text-2xl">07036348913</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkedAlt className="text-green-400 mr-4 text-xl" />
            <span className="text-black text-2xl">International, City, Nigeria</span>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex justify-center mt-12">
          <form className="space-y-6 bg-white p-8 w-full max-w-md">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 rounded border border-gray-600 focus:outline-none"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 rounded border border-gray-600 focus:outline-none"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm">
                Message
              </label>
              <textarea
                className="w-full p-2 rounded border border-gray-600 focus:outline-none"
                rows="5"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button className="w-full py-3 text-xl rounded-full bg-green-500 text-white font-bold hover:bg-green-600 transition-all duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
