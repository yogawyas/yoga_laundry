import React, { useEffect } from 'react';
import '../assets/styles/about.css';

const About = () => {
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

  const teamMembers = [
    {
      id: 1,
      name: "Yoga Wyas Pramudita",
      role: "Founder & CEO",
      image: "/yogawyas.jpg",
      description: "Pendiri Yoga Laundry dengan visi memberikan layanan laundry terbaik untuk masyarakat."
    },
    {
      id: 2,
      name: "Muhammad Geraldy Fariztito",
      role: "Admin",
      image: "/geraldy.jpg",
      description: "Mengelola operasional harian dan pelayanan pelanggan dengan penuh dedikasi."
    },
    {
      id: 3,
      name: "Daffa Muflih Purnama",
      role: "Head of IT & Marketing",
      image: "/damu.jpg",
      description: "Ahli dalam penanganan website premium dan marketing."
    },
    {
      id: 4,
      name: "Reza Rizky Pratama",
      role: "Senior Laundry Specialist",
      image: "/rezarizky.jpg",
      description: "Spesialis dalam perawatan pakaian premium."
    }
  ];

  const sendWablasNotif = async () => {
    const token = "YOUR_WABLAS_TOKEN"; // Ganti dengan token Wablas kamu
    const phone = "6281234567890";     // Ganti dengan nomor tujuan (format internasional)
    const message = "Terima kasih telah mengunjungi halaman About Yoga Laundry!";

    try {
      const response = await fetch("https://console.wablas.com/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify({
          phone,
          message
        })
      });

      const data = await response.json();
      if (data.status) {
        alert("Notifikasi WhatsApp berhasil dikirim!");
      } else {
        alert("Gagal mengirim notifikasi.");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat mengirim notifikasi.");
    }
  };

  return (
    <div className="about-container">
      <section className="about-hero" data-animate>
        <h1>Tentang Yoga Laundry</h1>
        <div className="about-description" data-animate>
          <p>
            Yoga Laundry didirikan pada tahun 2023 dengan komitmen untuk memberikan
            layanan laundry berkualitas tinggi dengan harga yang terjangkau.
          </p>
          <p>
            Dengan pengalaman dan dedikasi tim kami, Yoga Laundry telah berkembang
            menjadi salah satu penyedia layanan laundry terpercaya di kota ini.
          </p>
        </div>
      </section>

      <section className="vision-mission">
        <div className="vision" data-animate>
          <h2>Visi</h2>
          <p>Menjadi penyedia layanan laundry terpercaya dengan standar kualitas tertinggi.</p>
        </div>
        <div className="mission" data-animate>
          <h2>Misi</h2>
          <ul>
            <li>Memberikan layanan laundry profesional dengan hasil sempurna</li>
            <li>Menggunakan teknologi dan bahan ramah lingkungan</li>
            <li>Mengutamakan kepuasan pelanggan dalam setiap layanan</li>
            <li>Mengembangkan tim yang profesional dan berdedikasi</li>
          </ul>
        </div>
      </section>

      <section className="team-section">
        <h2 data-animate>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="team-card"
              data-animate
            >
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;