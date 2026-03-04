import React from 'react';
import { motion } from 'framer-motion';
import './HeroStyle.css';
import bgImage from '../../images/autocarril1.webp'; // Optimized image format

const Hero = () => {
    return (
        <div className="hero-master-container" id="inicio">

            {/* PART 1: Full Screen Hero Banner */}
            <div className="hero-container">
                <div
                    className="hero-bg"
                    style={{ '--hero-bg': `url(${bgImage})` }}
                ></div>

                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <motion.span
                        className="hero-label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        EXPERIENCIA PREMIUM
                    </motion.span>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Tu Próximo Auto <br /> Está Aquí
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Descubre nuestra selección exclusiva de unidades seminuevas certificadas.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a href="#flota" className="hero-btn-primary">
                            Ver Flota
                        </a>
                        <a href="#contacto" className="hero-btn-secondary">
                            Contáctanos
                        </a>
                    </motion.div>
                </div>

                <motion.a
                    href="#nosotros"
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.dispatchEvent(new CustomEvent('toggleAbout'));

                        setTimeout(() => {
                            document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }}
                >
                    <span className="scroll-text">Descubre Más</span>
                </motion.a>
            </div>
        </div>
    );
};

export default Hero;
