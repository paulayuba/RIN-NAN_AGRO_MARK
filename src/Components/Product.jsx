'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

// Importing images
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import productImage from "../assets/productImage.jpg"

const partnerImages = [product1, product2, product3, product4];

const Product = () => {
  const controls = useAnimationControls();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Calculate the total width of the carousel
    const calculateWidth = () => {
      const cardWidth = 400; // Card width
      const margin = 60; // Spacing between cards
      return partnerImages.length * (cardWidth + margin);
    };
    setWidth(calculateWidth());
  }, []);

  useEffect(() => {
    // Start animation once width is calculated
    if (width > 0) {
      controls.start({
        x: [0, -width],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30, // Reduced duration for faster speed
            ease: 'linear',
          },
        },
      });
    }
  }, [controls, width]);

  return (
    <div className="flex flex-row justify-center items-center my-16 relative overflow-hidden">
      <motion.div
        className="flex"
        animate={controls}
        style={{ width: `${width}px` }}
      >
        {[...partnerImages, ...partnerImages].map((src, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-xl mx-6 flex-shrink-0"
            style={{ width: '400px', height: '400px' }}
          >
            <img
              src={src}
              alt={`Partner ${index + 1}`}
              className="object-cover rounded-lg"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ))}
       
      </motion.div>
    </div>
  );
};

export default Product;
