import React, { useEffect, useState } from 'react';

function Contact() {
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section style={{
            minHeight: '100vh',
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '100px 20px 60px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
            <h2 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '40px',
            }}>Contact Me</h2>

            {submitted && (
                <div style={{
                    marginBottom: '20px',
                    padding: '12px 24px',
                    backgroundColor: '#052e16',
                    border: '1px solid #166534',
                    borderRadius: '8px',
                    color: '#4ade80',
                    fontSize: '0.9rem',
                }}>
                    ✓ Message sent! I'll get back to you soon.
                </div>
            )}

            <form onSubmit={handleSubmit} style={{
                width: '100%',
                maxWidth: '500px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
            }}>
                <input type="text" name="name" placeholder="Your Name"
                    value={formData.name} onChange={handleChange} required
                    style={{
                        width: '100%', padding: '14px 18px',
                        backgroundColor: '#ffffff', border: '1px solid #e5e7eb',
                        borderRadius: '8px', fontSize: '0.95rem',
                        color: '#111111', outline: 'none',
                        fontFamily: "'Inter', sans-serif",
                    }}
                />
                <input type="email" name="email" placeholder="Your Email"
                    value={formData.email} onChange={handleChange} required
                    style={{
                        width: '100%', padding: '14px 18px',
                        backgroundColor: '#ffffff', border: '1px solid #e5e7eb',
                        borderRadius: '8px', fontSize: '0.95rem',
                        color: '#111111', outline: 'none',
                        fontFamily: "'Inter', sans-serif",
                    }}
                />
                <textarea name="message" placeholder="Your Message"
                    value={formData.message} onChange={handleChange} required
                    style={{
                        width: '100%', padding: '14px 18px',
                        backgroundColor: '#ffffff', border: '1px solid #e5e7eb',
                        borderRadius: '8px', fontSize: '0.95rem',
                        color: '#111111', outline: 'none',
                        minHeight: '120px', resize: 'vertical',
                        fontFamily: "'Inter', sans-serif",
                    }}
                />
                <button type="submit"
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2563eb'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3b82f6'}
                    style={{
                        width: '100%', padding: '14px',
                        backgroundColor: '#3b82f6', color: '#ffffff',
                        border: 'none', borderRadius: '8px',
                        fontFamily: "'Syne', sans-serif",
                        fontSize: '0.95rem', fontWeight: 700,
                        cursor: 'pointer', transition: 'background-color 0.2s ease',
                    }}>
                    Send Message
                </button>
            </form>

            <p style={{
                marginTop: '32px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                color: '#4b5563',
                textAlign: 'center',
            }}>
                Or reach me at{' '}
                <a href="mailto:athahar02@gmail.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>
                    athahar02@gmail.com
                </a>
                {' '}· 6379959067
            </p>
        </section>
    );
}

export default Contact;