import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './AboutStyle.css';

function About() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => {
      setIsOpen(prev => !prev);
    };

    const handleHashChange = () => {
      if (window.location.hash === '#nosotros') {
        setIsOpen(true);
      }
    };

    // Check on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('toggleAbout', handleToggle);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('toggleAbout', handleToggle);
    };
  }, []);

  return (
    <div className="about-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="about-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <div className="about-text-column full-width">
              <h2 className="about-title-main">30 Años Conectando Destinos</h2>
              <div className="about-description">
                <p>
                  Autocarril Móviles nace con una misión clara: redefinir la experiencia de adquirir tu próximo vehículo.
                  Con más de tres décadas de trayectoria, hemos consolidado un legado basado en la confianza,
                  la transparencia y el compromiso absoluto con nuestros clientes.
                </p>
                <p>
                  Entendemos que un auto no es solo un medio de transporte, sino el inicio de nuevos proyectos y caminos.
                  Por eso, nuestro equipo de expertos está dedicado a brindarte un asesoramiento personalizado,
                  asegurando que encuentres la unidad perfecta para tus necesidades.
                </p>
              </div>
              <div className="about-signature">
                <span>Autocarril Team</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default About;