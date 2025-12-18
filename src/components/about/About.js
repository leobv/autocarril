import React from 'react';
import './AboutStyle.css';
import autocarril from '../../images/autocarril1.png';

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-text-column">
        <h3 className="about-subtitle">Sobre Nosotros</h3>
        <h2 className="about-title-main">30 Años Conectando Destinos</h2>
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
      <div className="about-image-column">
        <div className="image-frame">
          <img src={autocarril} alt="Showroom Autocarril" />
        </div>
      </div>
    </div>
  );
}

export default About;