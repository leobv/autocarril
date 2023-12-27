import React from 'react';
import './AboutStyle.css';
import autocarril from '../../images/autocarril1.png';

function About() {
  return (
    <div className="about-container">
      <h2>Sobre nosotros</h2>
      <div className="about-content">
          <img src={autocarril} alt="Tienda" />
          <p>Durante 30 años, AutoCarril Móviles se ha esforzado por brindarles a nuestros clientes el mejor servicio de calidad posible.
          La satisfacción del cliente es nuestra máxima prioridad, y estamos preparados para orientarlo y asistirlo a elegir su vehículo ideal.
          </p>
      </div>
    </div>
  );
}

export default About;