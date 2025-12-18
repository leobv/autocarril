import React, { useContext, useState, useEffect } from 'react';
import './NavBarStyle.css';
import logo from '../../images/logo.png';
import DarkModeContext from "../../context/DarkModeContext"
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Phone, Moon, Sun } from 'lucide-react';

function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
          <img src={logo} alt="Auto Carril" id="logo-img" />
        </a>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-menu">
          <li><a href="#inicio" className="nav-link-item">Inicio</a></li>
          <li><a href="#nosotros" className="nav-link-item">Nosotros</a></li>
          <li><a href="#flota" className="nav-link-item">Nuestra Flota</a></li>
          <li><a href="#contacto" className="nav-link-item">Contacto</a></li>
        </ul>

        <div className="nav-actions">
          <div className="social-links-desktop">
            <a href="https://www.instagram.com/autocarril/?hl=es" className="social-link" style={{ color: darkMode ? '#EAEAE0' : '#2C2C2C' }}>
              <Instagram size={20} />
            </a>
            <a href='https://api.whatsapp.com/send?phone=541139359902' className="social-link" style={{ color: darkMode ? '#EAEAE0' : '#2C2C2C' }}>
              <Phone size={20} />
            </a>
          </div>

          <button className='theme-toggle-btn' onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Hamburger Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="mobile-nav-list">
              <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
              <li><a href="#nosotros" onClick={toggleMenu}>Nosotros</a></li>
              <li><a href="#flota" onClick={toggleMenu}>Nuestra Flota</a></li>
              <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
export default Navbar;