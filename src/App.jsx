import React from 'react';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Tracks from './components/Tracks';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Registration from './components/Registration';
import FloatingCTA from './components/FloatingCTA';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="scanline"></div>
      <Hero />
      <Tracks />
      <Speakers />
      <Schedule />
      <Sponsors />
      <FAQ />
      <Registration />

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 CODEFEST_SYSTEMS. ALL RIGHTS RESERVED.</p>
          <p className="contact-email">CONTACT: contact.avolve@gmail.com</p>
          <div className="terminal-input">
            <span className="prompt">user@codefest:~$</span>
            <span className="cursor">_</span>
          </div>
        </div>
      </footer>
      <FloatingCTA />
    </div>
  );
}

export default App;
