import React from 'react';
import './ContactStyle.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="location">
        <h3>Nuestra ubicación:</h3>
        <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7576615515545!2d-58.49154068574255!3d-34.58499798046428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6410d91a01f%3A0x38892b05b59210!2sAutocarril%20M%C3%B3viles!5e0!3m2!1ses-419!2sar!4v1589398479246!5m2!1ses-419!2sar" />
      </div>
    </div>
  );
}

export default Contact;