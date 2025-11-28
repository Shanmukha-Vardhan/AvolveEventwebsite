import React from 'react';
import './Registration.css';

const Registration = () => {
    return (
        <section className="registration container">
            <div className="reg-content">
                <h2 className="glitch" data-text="> SECURE_YOUR_SPOT">
                    &gt; SECURE_YOUR_SPOT
                </h2>

                <a
                    href="https://docs.google.com/forms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ticket-btn"
                >
                    [ GET TICKET ]
                </a>

                <p className="urgency-text">
                    ⚠ WARNING: only 14 tickets remaining
                </p>
            </div>
        </section>
    );
};

export default Registration;
