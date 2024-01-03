import React from 'react';
import './AboutStyle.css';
import autocarril from '../../images/autocarril1.png';

function About() {
  return (
    <div className="about-container">
      <div className="about-title">
      <h2>Conocenos</h2>
      <img src={autocarril} alt="Tienda" />
      </div>
      <div className="about-content">
          <p>AutoCarril Móviles es una empresa con más de 30 años de experiencia en la venta de vehículos. Nuestro compromiso con la satisfacción del cliente es nuestro valor fundamental, y estamos siempre dispuestos a ayudarte a encontrar el vehículo ideal para tus necesidades.
            consegui el asesoramiento que necesitas para tomar la mejor decisión. 
          </p>
      </div>
    </div>
  );
}

export default About;