import React from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Services from './Components/Services';
import Product from "./Components/Product";
import Contact from './Components/Contact';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className='px-3'>
      <Navbar />
      <HomePage />
      <About />
      <Services />
      <Contact />
      <Product />
      <Footer />
        
    </div>
  );
}

export default App;
