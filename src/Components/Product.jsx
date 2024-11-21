// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion, useAnimationControls } from 'framer-motion';

// // Dummy data for partner images
// const partnerImages = [
//   "/images/partners.png",
//   "/images/partners1.png",
//   "/images/partners2.png",
//   "/images/partners3.png",
//   "/images/partners9.png",
//   "/images/partners11.png",
// ];

// const Partners = () => {
//   const controls = useAnimationControls();
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     // Calculate the total width of the image carousel
//     const calculateWidth = () => {
//       const imgWidth = 300; // Fixed image width
//       const margin = 48; // Spacing between images
//       return partnerImages.length * (imgWidth + margin);
//     };
//     setWidth(calculateWidth());
//   }, []);

//   useEffect(() => {
//     // Start animation once width is calculated
//     if (width > 0) {
//       controls.start({
//         x: [0, -width],
//         transition: {
//           x: {
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 50,
//             ease: "linear",
//           },
//         },
//       });
//     }
//   }, [controls, width]);

//   return (
//     <div className="flex flex-row justify-center items-center my-16 relative overflow-hidden">
//       <motion.div className="flex" animate={controls} style={{ width: `${width}px` }}>
//         {[...partnerImages, ...partnerImages].map((src, index) => (
//           <div
//             key={index}
//             className="flex items-center rounded-xl mx-4 flex-shrink-0 px-24 my-6 grayscale hover:grayscale-0"
//           >
//             <Image
//               src={src}
//               alt={`${index + 1}`}
//               width={300}
//               height={150}
//               className="object-cover"
//               onError={(e) => (e.target.src = "/images/placeholder.png")}
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Partners;
