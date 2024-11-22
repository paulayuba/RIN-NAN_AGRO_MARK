import React from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
// import Product from "./Components/Product";


const App = () => {
  return (
    <div className='px-3'>
      <Navbar />
      <HomePage />
      <About />
      <Services />
      <Contact />
      <Footer />
      {/* <Product /> */}
        
    </div>
  );
}

export default App;
