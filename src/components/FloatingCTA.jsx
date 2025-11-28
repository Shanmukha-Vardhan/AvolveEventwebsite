import React, { useState } from 'react';
import './FloatingCTA.css';

const FloatingCTA = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href="https://avolve-agency.vercel.app/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-cta"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Contact Avolve Agency"
        >
            <span className={`cta-text ${isHovered ? 'hidden' : 'visible'}`}>
                Built by Avolve
            </span>
            <span className={`cta-text ${isHovered ? 'visible' : 'hidden'}`}>
                Make it yours
            </span>
        </a>
    );
};

export default FloatingCTA;
