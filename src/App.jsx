import React from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Services from './Components/Services';


const App = () => {
  return (
    <div className='px-3'>
      <Navbar />
      <HomePage />
      <About />
      <Services />
    </div>
  );
}

export default App;
