// App.js
import React, { useState } from 'react';
import DarkModeContext from './context/DarkModeContext';
import Navbar from './components/navbar/NavBar';
import About from './components/about/About';
import CarCarousel from './components/CarCarousel/CarCarousel';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`container ${darkMode ? 'dark' : ''}`}>
        <Navbar />
        <About />
        <CarCarousel />
        <Contact />
      </div>
    </DarkModeContext.Provider>
  );
}
export default App;