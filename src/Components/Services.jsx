import React from 'react';
import Card1 from "../assets/Card1.jpg";
import Card2 from "../assets/Card2.jpg";
import Card5 from "../assets/Card5.jpg";
import Card6 from "../assets/Card6.jpg";
import Card8 from "../assets/Card8.jpg";
import Card9 from "../assets/Card9.jpg";
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';

const Card = [
  { image: Card2, id: "four", description: "Improve soil health and fertility." },
  { image: Card5, id: "five", description: "Provide high-quality farming tools." },
  { image: Card6, id: "six", description: "Support sustainable agriculture." },
  { image: Card1, id: "seven", description: "Deliver innovative crop solutions." },
  { image: Card8, id: "eight", description: "Boost water efficiency in farming." },
  { image: Card9, id: "nine", description: "Enhance pest and weed control." },
];

const Services = () => {
  return (
    <div>
      {/* Services Section */}
      <div id="services" className="max-w-7xl mx-auto p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Our Services</h2>
        <p className="text-center text-base sm:text-lg mb-10">
          Explore the services we offer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Card.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col sm:flex-row bg-white border rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.description}
                className="w-full sm:w-1/2 h-60 object-cover"
              />
              <div className="w-full sm:w-1/2 flex flex-col justify-center p-4">
                <h1 className="text-lg font-semibold mb-2">Service {index + 1}</h1>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  to={`/services/${service.id}`}
                  className="outline-double outline-3 outline-offset-2 text-center rounded-full py-3 px-8 bg-white text-green-500 font-bold outline-green-700 cursor-pointer"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}

    </div>
  );
};

export default Services;
