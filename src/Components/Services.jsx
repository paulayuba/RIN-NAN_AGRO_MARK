import React, { useState, useEffect } from 'react';
import map1 from "../assets/map1.jpg";
import map2 from "../assets/map2.jpg";
import map3 from "../assets/map3.jpg";
import map4 from "../assets/map4.jpg";
import map5 from "../assets/map5.jpeg";
import map6 from "../assets/map6.jpg";

const Card = [
  { image: map1, id: "one", description: "Increased Crop Yields: Our products help farmers achieve higher yields and better crop quality." },
  { image: map2, id: "two", description: "Effective Pest Control: Our pesticides and herbicides help control pests and weeds, reducing crop damage." },
  { image: map3, id: "three", description: "Improved Crop Health: Our fungicides and fertilizers promote healthy plant growth and development." },
  { image: map4, id: "four", description: "Enhanced Food Security: By increasing crop yields, we contribute to food security and sustainability." },
  { image: map5, id: "five", description: "Cost-Effective: Our products help farmers reduce costs associated with crop damage and loss." },
  { image: map6, id: "six", description: "Environmentally Friendly: We offer eco-friendly options and advise on sustainable agricultural practices." },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Optional: Lock scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedService]);

  return (
    <div>
      {/* Services Section */}
      <div id="Service" className="max-w-7xl mx-auto p-6 sm:p-8">
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
                alt={`Service ${index + 1}`}
                className="w-full sm:w-1/2 h-60 object-cover"
              />
              <div className="w-full sm:w-1/2 flex flex-col justify-center p-4">
                <h1 className="text-lg font-semibold mb-2">Service {index + 1}</h1>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => setSelectedService(service)}
                  className="outline-double outline-3 outline-offset-2 text-center rounded-full py-3 px-8 bg-white text-green-500 font-bold outline-green-700 cursor-pointer"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg max-w-lg w-[90%] p-6 relative shadow-xl animate-fade-in">
            <button
              className="absolute top-2 right-2 text-red-600 font-bold text-xl"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>
            <img
              src={selectedService.image}
              alt="Detail view"
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-2xl font-semibold mt-4 mb-2">More About This Service</h2>
            <p className="text-gray-700">{selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
