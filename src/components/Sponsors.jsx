import React from 'react';
import './Sponsors.css';

const sponsors = [
    "CYBERDYNE_SYSTEMS",
    "TYRELL_CORP",
    "MASSIVE_DYNAMIC",
    "WAYLAND_YUTANI",
    "E_CORP",
    "APERTURE_SCIENCE",
    "BLACK_MESA",
    "Hooli_XYZ"
];

const Sponsors = () => {
    return (
        <section className="sponsors">
            <div className="sponsors-overlay"></div>
            <div className="marquee-container">
                <div className="marquee-content">
                    {sponsors.map((sponsor, index) => (
                        <span key={index} className="sponsor-item">{sponsor}</span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {sponsors.map((sponsor, index) => (
                        <span key={`dup-${index}`} className="sponsor-item">{sponsor}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
