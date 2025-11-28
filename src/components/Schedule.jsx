import React, { useState } from 'react';
import './Schedule.css';

const scheduleData = {
    day1: [
        { time: '09:00 AM', event: 'Keynote: The Future of Code' },
        { time: '10:00 AM', event: 'React vs Vue: The Showdown' },
        { time: '11:30 AM', event: 'Coffee Break & Networking' },
        { time: '01:00 PM', event: 'AI in Web Development' },
        { time: '03:00 PM', event: 'Cybersecurity 101' },
    ],
    day2: [
        { time: '09:00 AM', event: 'Workshop: Rust for JS Devs' },
        { time: '11:00 AM', event: 'Live Coding Battle' },
        { time: '01:00 PM', event: 'Lunch Break' },
        { time: '02:00 PM', event: 'Closing Ceremony' },
        { time: '04:00 PM', event: 'After Party' },
    ]
};

const Schedule = () => {
    const [activeTab, setActiveTab] = useState('day1');

    return (
        <section className="schedule container">
            <h2 className="section-title">&gt; SYSTEM_SCHEDULE</h2>

            <div className="tabs">
                <button
                    className={`tab-btn ${activeTab === 'day1' ? 'active' : ''}`}
                    onClick={() => setActiveTab('day1')}
                >
                    [ DAY 1 ]
                </button>
                <button
                    className={`tab-btn ${activeTab === 'day2' ? 'active' : ''}`}
                    onClick={() => setActiveTab('day2')}
                >
                    [ DAY 2 ]
                </button>
            </div>

            <div className="timeline">
                {scheduleData[activeTab].map((item, index) => (
                    <div key={index} className="timeline-item">
                        <span className="time">{item.time}</span>
                        <span className="dots">........................................</span>
                        <span className="event">{item.event}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Schedule;
