import React, { useEffect } from 'react';
import '../assets/styles/mainpages.css';


const Services = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.setProperty('--item-index', index);
          entry.target.classList.add('animate-on-scroll');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Mengamati semua elemen yang perlu dianimasi
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  
  const services = [
    {
      id: 1,
      name: "Cuci Reguler",
      description: "Layanan cuci standar dengan perawatan maksimal",
      price: "Rp 7.000/kg",
      details: [
        "Waktu pengerjaan 2-3 hari",
        "Termasuk cuci, kering, dan setrika",
        "Menggunakan deterjen premium",
        "Gratis pengharum pakaian"
      ]
    },
    {
      id: 2,
      name: "Cuci Express",
      description: "Layanan cuci kilat untuk kebutuhan mendesak",
      price: "Rp 12.000/kg",
      details: [
        "Selesai dalam 24 jam",
        "Termasuk cuci, kering, dan setrika",
        "Prioritas pengerjaan",
        "Gratis pengharum pakaian premium"
      ]
    },
    {
      id: 3,
      name: "Dry Cleaning",
      description: "Perawatan khusus untuk pakaian formal dan premium",
      price: "Rp 25.000/pcs",
      details: [
        "Cocok untuk jas, gaun, dan pakaian formal",
        "Pembersihan mendalam",
        "Perawatan khusus sesuai bahan",
        "Termasuk pelayanan premium"
      ]
    }
  ];

  return (
    <div className="services-container">
      <h1 data-animate>Layanan Kami</h1>
      <p className="services-intro" data-animate>
        Pilih layanan yang sesuai dengan kebutuhan Anda
      </p>
      
      <div className="services-grid">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="service-card"
            data-animate
          >
            <h2>{service.name}</h2>
            <p className="service-description">{service.description}</p>
            <div className="price">{service.price}</div>
            <ul className="service-details">
              {service.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <button 
              className="order-button" 
              onClick={() => alert(`Anda memilih layanan ${service.name}`)}
            >
              Pilih Layanan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;