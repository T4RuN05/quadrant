import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Register from './components/Register';
import Login from './components/Login';


import backgroundImage from './assets/Background.png';

function App() {
  return (
    // The main container div for the entire page
    <div 
      className="relative min-h-screen font-sans bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      
      <div className="absolute inset-0 bg-black/70"></div>

      
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
