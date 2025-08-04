import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/styles/home.css";

const Home = () => {
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showReminder, setShowReminder] = useState(false);
  const [membershipDays, setMembershipDays] = useState(12); // contoh data
  const [discount, setDiscount] = useState(15); // contoh data
  const [countdown, setCountdown] = useState(5025); // detik, contoh: 1 jam 23 menit 45 detik
  const totalCountdown = 7200; // total detik layanan, misal 2 jam

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=3ac51c8f5b324b8cb4151136251101&q=Tangerang&aqi=no`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty("--item-index", index);
            entry.target.classList.add("animate-on-scroll");
            observer.unobserve(entry.target);
          }
        });
      },
      observerOptions
    );

    // Mengamati semua elemen yang perlu dianimasi
    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let seconds = countdown;
    const interval = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        setCountdown(seconds);
      }
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  const formatTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const progressPercent = Math.max(0, Math.round((countdown / totalCountdown) * 100));

  return (
    <div className="home-container">
      {weather && (
        <div className="weather-widget" data-animate>
          <div className="weather-info">
            <img src={weather.current.condition.icon} alt="weather icon" />
            <div className="weather-details">
              <span className="temperature">{weather.current.temp_c}°C</span>
              <span className="condition">{weather.current.condition.text}</span>
              <span className="location">{weather.location.name}</span>
            </div>
          </div>
        </div>
      )}

      <section className="hero-section" data-animate>
        <h1>
          <span className="title-top">Selamat Datang di</span>
          <span className="title-bottom">Yoga Laundry</span>
        </h1>
        <p className="tagline">Solusi Laundry Profesional untuk Pakaian Anda</p>
      </section>

      <section className="features-section">
        <h2 data-animate>Mengapa Memilih Kami?</h2>
        <div className="features-grid">
          <div className="feature-card" data-animate>
            <h3>Kualitas Premium</h3>
            <p>Menggunakan deterjen berkualitas tinggi dan peralatan modern</p>
          </div>
          <div className="feature-card" data-animate>
            <h3>Layanan Cepat</h3>
            <p>Selesai dalam 24 jam untuk layanan express</p>
          </div>
          <div className="feature-card" data-animate>
            <h3>Harga Terjangkau</h3>
            <p>Penawaran harga kompetitif dengan kualitas terbaik</p>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <h2 data-animate>Layanan Kami</h2>
        <div className="services-list">
          <div
            className="service-item"
            data-animate
            onClick={() => navigate("/services")}
            style={{ cursor: "pointer" }}
          >
            <h3>Cuci Reguler</h3>
            <p>Layanan cuci standar dengan perawatan maksimal</p>
          </div>
          <div
            className="service-item"
            data-animate
            onClick={() => navigate("/services")}
            style={{ cursor: "pointer" }}
          >
            <h3>Cuci Express</h3>
            <p>Layanan cuci kilat untuk kebutuhan mendesak</p>
          </div>
          <div
            className="service-item"
            data-animate
            onClick={() => navigate("/services")}
            style={{ cursor: "pointer" }}
          >
            <h3>Dry Cleaning</h3>
            <p>Perawatan khusus untuk pakaian formal dan premium</p>
          </div>
        </div>
      </section>

      <div className="reminder-container">
        <button
          className="reminder-btn"
          onClick={() => setShowReminder(!showReminder)}
        >
          Reminder
        </button>
        <div className={`reminder-dropdown${showReminder ? ' active' : ''}`}>
          <div className="dropdown-title">🎉 Membership & Layanan Anda</div>
          <div className="dropdown-item">
            <span>🗓️ <b>{membershipDays} hari</b> sisa membership</span>
            <div style={{ fontSize: "0.9rem", color: "#9ca3af" }}>
              Nikmati layanan premium lebih lama!
            </div>
          </div>
          <div className="dropdown-item">
            <span>⏳ Countdown layanan:</span>
            <div style={{ fontWeight: 600, color: "#fbbf24", fontSize: "1.2rem" }}>
              {formatTime(countdown)}
            </div>
            <div className="progress-bar-bg">
              <div
                className="progress-bar-fg"
                style={{
                  width: `${progressPercent}%`,
                  background: progressPercent > 50 ? "#00f472ff" : progressPercent > 20 ? "#fbbf24" : "#ef4444"
                }}
              ></div>
            </div>
            <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
              {progressPercent}% waktu layanan tersisa
            </div>
          </div>
          <div className="dropdown-item">
            <span>🎁 Diskon spesial untuk Anda: </span>
            <span style={{ color: "#22d3ee", fontWeight: 700, fontSize: "1.1rem" }}>
              {discount}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;