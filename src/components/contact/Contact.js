import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './ContactStyle.css';

import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.name}, hemos recibido tu mensaje. Nos pondremos en contacto pronto.`);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="contact-wrapper">
      <div className="section-header">
        <h2 className="section-headline">Estamos Esperándote</h2>
      </div>

      <div className="contact-grid">
        {/* Left Column: Info & Map */}
        <div className="contact-left-col">
          <div className="contact-info-card">
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h3>Dirección</h3>
                <p>Av. Ejemplo 1234, Buenos Aires</p>
              </div>
            </div>

            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h3>Teléfono</h3>
                <p>+54 11 3935-9902</p>
              </div>
            </div>

            <div className="info-item">
              <Clock className="info-icon" />
              <div>
                <h3>Horarios</h3>
                <p>Lun - Vie: 9:00 - 18:00</p>
                <p>Sáb: 9:00 - 13:00</p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title='Ubicación AutoCarril'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7576615515545!2d-58.49154068574255!3d-34.58499798046428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6410d91a01f%3A0x38892b05b59210!2sAutocarril%20M%C3%B3viles!5e0!3m2!1ses-419!2sar!4v1589398479246!5m2!1ses-419!2sar"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form-container">
          <h3>Envíanos tu consulta</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre Completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email (Opcional)"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="¿En qué auto estás interesado?"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
