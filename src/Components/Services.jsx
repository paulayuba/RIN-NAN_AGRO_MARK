import React from 'react';
import map1 from "../assets/map1.jpg";
import map2 from "../assets/map2.jpg";
import map3 from "../assets/map3.jpg";
import map4 from "../assets/map4.jpg";
import map5 from "../assets/map5.jpeg";
import map6 from "../assets/map6.jpg";
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';

const Card = [
  { image: map1, id: "one", description: "Increased Crop Yields: Our products help farmers achieve higher yields and better crop quality." },
  { image: map2, id: "two", description: "Effective Pest Control: Ourpesicides and herbicides help control pests and weeds, reducing crop damage." },
  { image: map3, id: "three",  description: "Improved Crop Health: Our fungicides and fertilizers promote healthy plant growth and development." },
  { image: map4, id: "four", description: "Enhanced Food Security: By increasing crop yields, we contribute to food security and sustainability." },
  { image: map5, id: "five", description: "Cost-Effective: Our products help farmers reduce costs associated with crop damage and loss." },
  { image: map6, id: "six", description: "Environmentally Friedly:We offereco-friendly options and advise on sustainable agricultural practices." },
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
