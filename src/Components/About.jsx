import React from 'react'
import image4 from "../assets/image4.jpg"

const About = () => {
  return (
    <div>
      <div className=''>
        <h2 className='flex justify-center text-4xl font-semibold text-green-500 py-4'>About Us</h2>
        <img className='w-full h-80'
        src={image4} alt="" />
      </div>
    </div>
  )
}
export default About
