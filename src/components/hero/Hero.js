import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './HeroStyle.css';
import bgImage from '../../images/autocarril1.png'; // Switched to car image
import showroomImage from '../../images/autocarril1.png'; // Reusing for content or another if available

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

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <span className="scroll-text">Descubre Más</span>
                    <ChevronDown size={24} className="bounce-icon" />
                </motion.div>
            </div>

            {/* PART 2: Merged "About" Content (Seamless Flow) */}
            <div className="hero-about-section">
                <div className="about-wrapper centered-layout">
                    <div className="about-text-column centered-content">
                        <h3 className="section-label">SOBRE NOSOTROS</h3>
                        <h2 className="section-headline">30 Años Conectando Destinos</h2>
                        <div className="about-description">
                            <p>
                                AutoCarril Móviles nace con una misión clara: redefinir la experiencia de adquirir tu próximo vehículo.
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
                            <span>AutoCarril Team</span>
                        </div>
                    </div>
                    {/* Image Column Removed per user request */}
                </div>
            </div>

        </div>
    );
};

export default Hero;
