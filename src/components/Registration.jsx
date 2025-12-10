import React, { useState, useEffect, useRef } from 'react';
import './Registration.css';

const Registration = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        alias: '',
        email: '',
        role: ''
    });
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { text: "> INITIALIZING REGISTRATION PROTOCOL...", type: 'system' },
        { text: "> PLEASE AUTHENTICATE TO CONTINUE.", type: 'system' }
    ]);
    const bottomRef = useRef(null);

    const questions = {
        1: "ENTER YOUR ALIAS / NAME:",
        2: "ENTER CONTACT EMAIL:",
        3: "SELECT ROLE [DEV / DESIGNER / HACKER]:"
    };

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    useEffect(() => {
        if (step === 0) {
            setTimeout(() => {
                setHistory(prev => [...prev, { text: questions[1], type: 'question' }]);
                setStep(1);
            }, 1000);
        }
    }, []);

    const handleInput = (e) => {
        if (e.key === 'Enter') {
            processInput(input);
            setInput('');
        }
    };

    const processInput = (val) => {
        if (!val.trim()) return;

        // Add user input to history
        setHistory(prev => [...prev, { text: val, type: 'user' }]);

        // Process based on step
        if (step === 1) {
            setFormData({ ...formData, alias: val });
            setTimeout(() => {
                setHistory(prev => [...prev, { text: questions[2], type: 'question' }]);
                setStep(2);
            }, 500);
        } else if (step === 2) {
            setFormData({ ...formData, email: val });
            setTimeout(() => {
                setHistory(prev => [...prev, { text: questions[3], type: 'question' }]);
                setStep(3);
            }, 500);
        } else if (step === 3) {
            setFormData({ ...formData, role: val });
            setTimeout(() => {
                setHistory(prev => [...prev, { text: "> VERIFYING CREDENTIALS...", type: 'system' }]);
                setTimeout(() => finalizeRegistration(), 1500);
            }, 500);
        }
    };

    const finalizeRegistration = () => {
        setHistory(prev => [
            ...prev,
            { text: "> ACCESS GRANTED.", type: 'success' },
            { text: "> TICKET GENERATED.", type: 'success' },
            { text: "> WELCOME TO THE SYSTEM.", type: 'success' }
        ]);
        setStep(4); // Success state
    };

    const Ticket = () => (
        <div className="digital-ticket">
            <div className="ticket-header">CODEFEST_2025 // ADMIT ONE</div>
            <div className="ticket-body">
                <div className="ticket-row">
                    <span className="label">AGENT:</span>
                    <span className="value">{formData.alias}</span>
                </div>
                <div className="ticket-row">
                    <span className="label">ROLE:</span>
                    <span className="value">{formData.role.toUpperCase()}</span>
                </div>
                <div className="ticket-row">
                    <span className="label">ID:</span>
                    <span className="value">{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                </div>
            </div>
            <div className="barcode">|| | ||| | || ||| ||</div>
        </div>
    );

    return (
        <section className="registration container">
            <h2 className="section-title">&gt; REGISTRATION_TERMINAL</h2>

            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <div className="terminal-title">bash -- active_session</div>
                </div>

                <div className="terminal-body">
                    {history.map((line, i) => (
                        <div key={i} className={`line ${line.type}`}>
                            {line.type === 'user' ? '$ ' : ''}{line.text}
                        </div>
                    ))}

                    {step < 4 && (
                        <div className="line input-line">
                            <span className="prompt">$</span>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleInput}
                                autoFocus
                                className="terminal-input-field"
                                placeholder={step === 3 ? "type role..." : "..."}
                            />
                        </div>
                    )}

                    {step === 4 && <Ticket />}
                    <div ref={bottomRef} />
                </div>
            </div>
        </section>
    );
};

export default Registration;
