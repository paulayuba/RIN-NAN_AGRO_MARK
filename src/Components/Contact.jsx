import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-black font-bold text-center mt-8">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 mt-12">
          {/* Contact Info Section */}
          <div className="md:mb-0 space-y-6 text-center md:text-left">
           
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span className="text-black text-2xl">07036348913</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span className="text-black text-2xl">Bokkos, City, Nigeria</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-1 w-48">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="Message" className="block mb-2 text-sm">
                  Message
                </label>
                <textarea
                  className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button className="text-2xl outline-double outline-3 outline-offset-2 rounded-full py-2 px-8 bg-white text-green-500 font-bold outline-green-700 sm:py-2 sm:px-6 lg:py-4 lg:px-10 hover:bg-green-500 hover:text-white transition-all duration-300">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
