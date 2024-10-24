import React from 'react';
import image6 from "../assets/image6.jpg";

const HomePage = () => {
  return (
    <div className='flex flex-col gap-x-32 items-center md:flex-row justify-center w-full h-[115vh] p-16 rounded-lg px-8 md:px-12 lg:px-20'>
      {/* Left side */}
      <div className='gap-10'>
        <h2 className='text-3xl font-semibold uppercase mb-4'>
          rinan <br /> agro mark nigeria limited
        </h2>
        <hr className='flex flex-col items-center w-full border-2 border-green-500 rounded-md'/>
        <p className='text-gray-950 mt-7 font-light text-lg'>
          Has build a reputation for excellence in agricalture sector. <br />
          Our commitment to qaulity, sustainability, and customer <br />
          Satisfaction has eaned us the trust of farmers and <br />
          Agribussiness across nigeria. we continue to build <br />
        </p>
        <div className='flex mt-4'>
          <button className='bg-green-500 text-white py-3 px-6 rounded-md font-light border-lime-300 hover:bg-white border shadow-sm hover:text-green-500'>About Us</button>
        </div>
      </div>

      {/* Right side */}
      <div className="w-[60%] space-x-10 mt-14">
        <div className='flex flex-col '>
          <div className='space-x-4 mb-14 flex'>
            <img
              className="rounded-lg w-full h-[30rem]"
              src={image6}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
