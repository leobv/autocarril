// App.js
import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import DarkModeContext from './context/DarkModeContext';
import Navbar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import FloatingWhatsApp from './components/floating/FloatingWhatsApp';
import './App.css';

// Lazy loaded heavy components
const CarGallery = lazy(() => import('./components/CarGallery/CarGallery'));
const Contact = lazy(() => import('./components/contact/Contact'));

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
  <motion.section
    id={id}
    className={`section-wrapper ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // Animate once when 20% visible
    variants={sectionVariants}
  >
    {children}
  </motion.section>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <main className={`container ${darkMode ? 'dark-mode-wrapper' : ''}`}>
        <Navbar />

        <Hero />

        <Section id="nosotros">
          <About />
        </Section>

        <Suspense fallback={<div style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-muted)' }}>Cargando interfaz...</div>}>
          <Section id="flota">
            <CarGallery />
          </Section>

          <Section id="contacto">
            <Contact />
          </Section>
        </Suspense>

        <Footer />
        <FloatingWhatsApp />
      </main>
    </DarkModeContext.Provider>
  );
}

export default App;