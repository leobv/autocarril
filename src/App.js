// App.js
import React, { useState, Suspense, lazy } from 'react';
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

const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`section-wrapper ${className}`}
  >
    {children}
  </section>
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