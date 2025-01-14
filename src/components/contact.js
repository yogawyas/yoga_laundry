import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../assets/styles/contact.css';

const Contact = () => {
  useScrollAnimation();

  return (
    //alamat
    <div className="contact-container">
      <div className="contact-card scroll-fade-up">
        <h1>Hubungi Kami</h1>
        <div className="contact-details">
          <p className="scroll-fade-left">
            <i className="fas fa-map-marker-alt"></i>
            Jl. Akasia 3 Extension Blok AX 4 No. 2 Taman Royal 3 Kota Tangerang
          </p>
          <p className="scroll-fade-left">
            <i className="fas fa-phone"></i>
            +62 812-3456-7890
          </p>
          <p className="scroll-fade-left">
            <i className="fas fa-envelope"></i>
            info@yogalaundry.com
          </p>
          <p className="contact-hours scroll-fade-right">
            Buka Setiap Hari: 08.00 - 20.00 WIB
          </p>
        </div>
      </div>

      <div className="map-container scroll-scale">
        <h2 className="map-title">Lokasi Kami</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.8400527075405!2d106.66298206489498!3d-6.178539994298831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9c49a2ce295%3A0x4348de1c87fc482e!2sTaman%20Royal%203!5e0!3m2!1sid!2sid!4v1736824488754!5m2!1sid!2sid" 
          width="100%"
          height="450"
          style={{ 
            border: 0,
            filter: 'invert(90%) hue-rotate(180deg)'
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;