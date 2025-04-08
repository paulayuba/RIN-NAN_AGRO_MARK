import React from 'react';
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image7 from "../assets/image7.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [image3, image4, image7];

const HomePage = () => {
  return (
    <div id="home" className="w-full flex flex-col items-center justify-start">

      {/* Text Section */}
      <div className="w-full flex flex-col items-center gap-6 py-16 px-4">
        <div className="flex flex-col items-start justify-center text-center lg:text-left w-full max-w-5xl">
          <p className="text-green-500 text-3xl sm:text-4xl md:text-5xl font-thin leading-relaxed">
            Founded in Year 2020,
            <span className="text-green-900 block py-4 font-semibold">
              RIN'NAN AGRO MART NIGERIA LIMITED
            </span>
            was established with a vision to support the Nigerian agricultural sector by providing reliable and high-quality agrochemicals and agricultural services.
          </p>
          <div className="mt-6">
            <a
              href="/about"
              className="outline-double outline-3 outline-offset-2 rounded-full py-3 px-8 bg-white text-black font-bold outline-green-700"
            >
              About Us
            </a>
          </div>
        </div>
      </div>

      {/* Swiper Image Section at Bottom */}
      <div className="w-screen h-[500px] relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-full object-cover px-10"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
