import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const [text, setText] = useState('');
  const fullText = "> INITIALIZING CODEFEST_2025...";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(typeInterval);
    }, 100);

    const targetDate = new Date('2025-12-31T00:00:00').getTime();
    const timeInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timeInterval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => {
      clearInterval(typeInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="system-status">
          <div className="status-item">CPU: <span className="random-val">42%</span></div>
          <div className="status-item">RAM: <span className="random-val">12GB</span></div>
          <div className="status-item">NET: <span className="random-val">CONNECTED</span></div>
        </div>

        <h1 className="glitch-title">{text}<span className="cursor">_</span></h1>

        <div className="countdown-container">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="time-box">
              <div className="time-value glitch-num">{String(value).padStart(2, '0')}</div>
              <div className="time-label">{label.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <div className="hero-footer">
          <p className="location-text">:: LOCATION: CYBER_SPACE_NODE_01 ::</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
