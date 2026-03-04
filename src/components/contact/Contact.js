import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
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
    const text = `Hola AutoCarril, soy *${formData.name}*.%0A%0A📱 *Teléfono:* ${formData.phone}%0A✉️ *Email:* ${formData.email || 'N/A'}%0A%0A💬 *Consulta:*%0A${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=541139359902&text=${text}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="contact-wrapper">
      <div className="section-header">
        <h2 className="section-headline">Estamos Esperándote</h2>
        <p className="section-subtitle">Visitanos en nuestro showroom o envianos tu consulta online</p>
      </div>

      {/* Top Section: Full Width Map */}
      <div className="map-premium-container">
        <iframe
          title='Ubicación AutoCarril'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7576615515545!2d-58.49154068574255!3d-34.58499798046428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6410d91a01f%3A0x38892b05b59210!2sAutocarril%20M%C3%B3viles!5e0!3m2!1ses-419!2sar!4v1589398479246!5m2!1ses-419!2sar"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="map-overlay-button">
          <a href="https://maps.google.com/?q=Autocarril+Moviles" target="_blank" rel="noopener noreferrer" className="btn-directions">
            Abrir en Google Maps
          </a>
        </div>
      </div>

      <div className="contact-bottom-grid">
        {/* Left Column: Info Card Premium */}
        <div className="contact-info-premium">
          <div className="info-header">
            <h3>Nuestra Oficina</h3>
            <p>Acercate a conocer nuestros vehículos en persona. Te brindaremos la mejor atención.</p>
          </div>

          <div className="info-list">
            <div className="info-item-premium">
              <div className="icon-wrapper">
                <MapPin className="info-icon" />
              </div>
              <div>
                <h4>Dirección</h4>
                <p>Av. Salvador María del Carril 2131, C1419GZA Cdad. Autónoma de Buenos Aires</p>
              </div>
            </div>

            <div className="info-item-premium">
              <div className="icon-wrapper">
                <Phone className="info-icon" />
              </div>
              <div>
                <h4>Teléfono</h4>
                <p>+54 11 3935-9902</p>
              </div>
            </div>

            <div className="info-item-premium">
              <div className="icon-wrapper">
                <Clock className="info-icon" />
              </div>
              <div>
                <h4>Horarios de Atención</h4>
                <p>Lunes a Viernes: 9:00 hs - 18:00 hs</p>
                <p>Sábados: 9:00 hs - 13:00 hs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="contact-form-container">
          <h3>Envíanos tu consulta</h3>
          <p className="form-subtitle">Completá tus datos y un asesor se comunicará a la brevedad.</p>
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
                placeholder="Teléfono (Cod. Área + Número)"
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
                placeholder="¿En qué auto estás interesado o qué duda tenés?"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Consulta</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
