import React from 'react';
import './Tracks.css';
import TiltCard from './TiltCard';

const tracks = [
    {
        id: '01',
        title: 'AI_REVOLUTION',
        desc: 'Neural networks, LLMs, and the rise of the machines.',
        icon: '[🤖]'
    },
    {
        id: '02',
        title: 'CYBER_SECURITY',
        desc: 'Ethical hacking, zero-day exploits, and defense.',
        icon: '[🔒]'
    },
    {
        id: '03',
        title: 'WEB3_DECENTRAL',
        desc: 'Blockchain, smart contracts, and the new internet.',
        icon: '[🔗]'
    },
    {
        id: '04',
        title: 'QUANTUM_LEAP',
        desc: 'Computing beyond binary. The future is uncertain.',
        icon: '[⚛️]'
    }
];

const Tracks = () => {
    return (
        <section className="tracks container">
            <h2 className="section-title">&gt; EVENT_MODULES</h2>
            <div className="tracks-grid">
                {tracks.map((track) => (
                    <TiltCard key={track.id} className="track-card">
                        <div className="track-header">
                            <span className="track-id">#{track.id}</span>
                            <span className="track-icon">{track.icon}</span>
                        </div>
                        <h3 className="track-title">{track.title}</h3>
                        <p className="track-desc">{track.desc}</p>
                        <div className="track-footer">
                            <button className="access-btn">ACCESS_MODULE</button>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </section>
    );
};

export default Tracks;
