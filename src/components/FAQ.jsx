import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        q: "Is this event suitable for beginners?",
        a: "AFFIRMATIVE. We have tracks for all skill levels, from 'Hello World' to Kernel Hacking."
    },
    {
        q: "Do I need to bring my own laptop?",
        a: "REQUIRED. Access to the mainframe requires personal hardware interface."
    },
    {
        q: "Is there a dress code?",
        a: "OPTIONAL. Hoodies and sunglasses recommended for maximum stealth."
    },
    {
        q: "Will there be food?",
        a: "CONFIRMED. Pizza and caffeine supplies will be unlimited."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq container">
            <h2 className="section-title">&gt; SYSTEM_HELP_MANUAL</h2>
            <div className="faq-list">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <span className="prompt">$</span> {item.q}
                            <span className="toggle-icon">{activeIndex === index ? '[-]' : '[+]'}</span>
                        </div>
                        <div className="faq-answer">
                            <p>&gt; {item.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
