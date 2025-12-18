import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import './FooterStyle.css';
import logo from '../../images/logo.png'; // Reusing logo, might need a white version or filter

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-container">

                {/* Column 1: Brand */}
                <div className="footer-col brand-col">
                    <img src={logo} alt="AutoCarril" className="footer-logo" />
                    <p className="footer-slogan">
                        30 años conectando destinos y cumpliendo sueños sobre ruedas. Calidad y confianza garantizada.
                    </p>
                    <div className="footer-socials">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={24} />
                        </a>
                    </div>
                </div>

                {/* Column 2: Navigation */}
                <div className="footer-col nav-col">
                    <h3>Explorar</h3>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#flota">Nuestra Flota</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div className="footer-col contact-col">
                    <h3>Contacto</h3>
                    <div className="contact-row">
                        <MapPin size={20} className="footer-icon" />
                        <span>Av. Ejemplo 1234, Buenos Aires</span>
                    </div>
                    <div className="contact-row">
                        <Phone size={20} className="footer-icon" />
                        <span>+54 11 3935-9902</span>
                    </div>
                    <div className="contact-row">
                        <Mail size={20} className="footer-icon" />
                        <span>contacto@autocarril.com</span>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} AutoCarril. Todos los derechos reservados.</p>
                <p className="credits">Desarrollado con ❤️ por Agentic AI</p>
            </div>
        </footer>
    );
};

export default Footer;
