import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-72"
        style={{
          backgroundImage:
            "url('https://www.swegonairacademy.com/siteassets/4_updates_and_insights/4b_events_webinars/blue-house-with-green-ambitions-1408x452.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="max-w-7xl mx-auto px-6 lg:ml-28 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 cursor-pointer">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Message</label>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Get in Touch */}
        <div className="ml-10">
          <h2 className="text-2xl sm:text- font-semibold mb-4 cursor-pointer">Get In Touch</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-blue-600 w-5" />
              <span>
                <a href="tel:+2348069672917">07036348913</a>
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 w-5" />
              <span>
                <a href="mailto:contact@bluehouse.com ">example@gmail.com</a>
              </span>
            </li>
          </ul>

          {/* Follow Us On */}
          <h3 className="mt-6 font-semibold">Follow Us On</h3>
          <ul className="flex items-center space-x-6 list-none text-3xl mt-6 md:mt-32">
            <li>
              <a href="https://www.facebook.com/cletus.danladi" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;