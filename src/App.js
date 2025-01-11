import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';  // pastikan nama file sesuai (home.js atau Home.js)
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import './assets/styles/mainpages.css';
import Membership from './components/membership';
import './assets/styles/home.css';
import './assets/styles/about.css';
import './assets/styles/services.css';
import './assets/styles/contact.css';
import './assets/styles/membership.css';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />  {/* Ubah ini untuk menampilkan komponen Home */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/membership" element={<Membership />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;