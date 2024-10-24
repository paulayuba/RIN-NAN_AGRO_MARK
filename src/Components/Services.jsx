import React from 'react';
import Card1 from "../assets/Card1.jpg";
import Card2 from "../assets/Card2.jpg";
// import Card3 from "../assets/Card3.jpg";
// import Card4 from "../assets/Card4.jpg";
import Card5 from "../assets/Card5.jpg";
import Card6 from "../assets/Card6.jpg";
// import Card10 from "../assets/Card10.avif";
import Card8 from "../assets/Card8.jpg";
import Card9 from "../assets/Card9.jpg";

const Card = [
//   {
//     image: Card10,
//     id: "one",
//     description: "Description",
//   },
//   {
//     image: Card4,
//     id: "two",
//     description: "Description",
//   },
//   {
//     image: Card3,
//     id: "three",
//     description: "Description",
//   },
  {
    image: Card2,
    id: "four",
    description: "Description",
  },
  {
    image: Card5,
    id: "five",
    description: "Description",
  },
  {
    image: Card6,
    id: "six",
    description: "Description",
  },
  {
    image: Card1,
    id: "seven",
    description: "Description",
  },
  {
    image: Card8,
    id: "eight",
    description: "Description",
  },
  {
    image: Card9,
    id: "nine",
    description: "Description",
  },
];

const Services = () => {
  return (
    <div className='max-w-7xl mx-auto p-8'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Our Services</h2>
      <p className='text-center text-lg mb-10'>Explore the services we offer.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {Card.map((service, index) => (
          <div key={service.id} className='flex flex-col sm:flex-row bg-white border rounded-lg w-full'>
            <img 
              src={service.image} 
              alt={`Service ${index + 1}`} 
              className="w-full sm:w-1/2 h-60 object-cover rounded-l-lg"
            />
            
            <div className='w-full sm:w-1/2 flex flex-col justify-center p-4'>
              <h1 className="text-lg font-semibold mb-2">Increased Crop Yield</h1>
              <p className="text-gray-600 mb-8">Our products help farmers achieve better crop quality.</p>
              <button className='bg-green-500 text-white rounded-md py-1 mx-6'>Explore</button>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Services;
