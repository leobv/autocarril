// App.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DarkModeContext from './context/DarkModeContext';
import Navbar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
// About is now integrated in Hero
import CarGallery from './components/CarGallery/CarGallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import FloatingWhatsApp from './components/floating/FloatingWhatsApp';
import './App.css';

// Animation variants for Scroll Reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Section = ({ id, children, className = "" }) => (
  <motion.div
    id={id}
    className={`section-wrapper ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // Animate once when 20% visible
    variants={sectionVariants}
  >
    {children}
  </motion.div>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`container ${darkMode ? 'dark-mode-wrapper' : ''}`}>
        <Navbar />

        <Hero /> {/* Compound Hero (Includes About) */}

        {/* 'nosotros' is now part of Hero, so we jump to Fleet */}

        <Section id="flota">
          <CarGallery />
        </Section>

        <Section id="contacto">
          <Contact />
        </Section>

        <Footer /> {/* New Footer */}
        <FloatingWhatsApp /> {/* Quick Action */}
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;