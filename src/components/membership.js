import React, { useEffect } from 'react';
import '../assets/styles/membership.css';

function Membership() {
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

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const membershipPlans = [
    {
      id: 1,
      name: "Paket Reguler",
      price: "Rp 199.000/bulan",
      features: [
        "Cuci + Setrika 10kg/bulan",
        "Gratis pengambilan & pengantaran",
        "Pengerjaan 2-3 hari",
        "Termasuk pelembut & pewangi",
      ],
      recommended: false
    },
    {
      id: 2,
      name: "Paket Premium",
      price: "Rp 399.000/bulan",
      features: [
        "Cuci + Setrika 25kg/bulan",
        "Gratis pengambilan & pengantaran",
        "Pengerjaan 1-2 hari",
        "Termasuk pelembut & pewangi premium",
        "Prioritas pengerjaan",
        "Perawatan khusus pakaian bernilai tinggi"
      ],
      recommended: true
    },
    {
      id: 3,
      name: "Paket Mahasiswa",
      price: "Rp 149.000/bulan",
      features: [
        "Cuci + Setrika 8kg/bulan",
        "Gratis pengambilan & pengantaran",
        "Pengerjaan 3-4 hari",
        "Khusus pelajar & mahasiswa",
        "Diskon 15% untuk setiap laundry",
        "Berlaku di area kampus"
      ],
      recommended: false
    },

    {
      id: 4,
      name: "Paket Tahunan",
      price: "Rp 1.990.000/tahun",
      features: [
        "Cuci + Setrika 100kg/tahun",
        "Gratis pengambilan & pengantaran",
        "Pengerjaan 2-3 hari",
        "Termasuk pelembut & pewangi premium",
        "Diskon 10% untuk setiap laundry",
        "Perawatan khusus pakaian bernilai tinggi"
      ],
      recommended: false
    }
  ];

  return (
    <div className="membership-container">
      <h1 data-animate>Paket Membership Laundry</h1>
      <p className="membership-intro" data-animate>
        Hemat dan praktis dengan berlangganan paket membership bulanan kami. 
        Nikmati berbagai keuntungan eksklusif untuk member.
      </p>

      <div className="membership-grid">
        {membershipPlans.map((plan, index) => (
          <div 
            key={plan.id} 
            className={`membership-card ${plan.recommended ? 'recommended' : ''}`}
            data-animate
          >
            {plan.recommended && (
              <div className="recommended-badge">BEST VALUE</div>
            )}
            <h2>{plan.name}</h2>
            <div className="price">{plan.price}</div>
            <ul className="features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="join-button">
              Daftar Sekarang
            </button>
          </div>
        ))}
      </div>

      <div className="membership-note" data-animate>
        <h3>Syarat dan Ketentuan:</h3>
        <ul>
          <li>Biaya pendaftaran Rp 50.000 (one-time payment)</li>
          <li>Masa aktif membership 30 hari</li>
          <li>Kuota kg tidak dapat diakumulasi ke bulan berikutnya</li>
          <li>Pengambilan & pengantaran gratis dalam radius 5km</li>
          <li>Pembayaran dapat dilakukan via transfer atau e-wallet</li>
          <li>Kelebihan kg akan dikenakan biaya reguler</li>
        </ul>
      </div>
    </div>
  );
}

export default Membership;