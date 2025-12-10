import React from 'react';
import './Speakers.css';
import TiltCard from './TiltCard';

const speakersData = [
    { id: 1, initials: 'JD', name: 'John Doe', role: 'Senior Eng @ Google' },
    { id: 2, initials: 'AS', name: 'Anna Smith', role: 'CTO @ TechCorp' },
    { id: 3, initials: 'MR', name: 'Mr. Robot', role: 'Hacker @ Fsociety' },
    { id: 4, initials: 'KL', name: 'Kevin Lee', role: 'DevRel @ Vercel' },
];

const Speakers = () => {
    return (
        <section className="speakers container">
            <h2 className="section-title">&gt; SPEAKERS_LOADED</h2>
            <div className="speakers-grid">
                {speakersData.map((speaker) => (
                    <TiltCard key={speaker.id} className="speaker-card">
                        <div className="speaker-circle">
                            {speaker.initials}
                        </div>
                        <div className="tooltip">
                            <p className="speaker-name">{speaker.name}</p>
                            <p className="speaker-role">{speaker.role}</p>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </section>
    );
};

export default Speakers;
