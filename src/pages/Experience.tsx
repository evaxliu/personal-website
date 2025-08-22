import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

function Experience() {
  return (
    <div className="Experience">
      <header className="Experience-header">
        <p>
          Eva Liu's Space
        </p>
        <main>
        </main>
        {/* <Router>
          <Routes>
            <Route path="/" element={<LofiRoom />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router> */}
      </header>
    </div>
  );
}

export default Experience;
