import React, { useEffect, useState } from 'react';

function About() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section style={{
            minHeight: '100vh',
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
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
                marginBottom: '36px',
            }}>About Me</h2>

            <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: '#9ca3af',
                maxWidth: '560px',
                lineHeight: 1.85,
                marginBottom: '20px',
            }}>
                I am a <strong style={{ fontWeight: 600, color: '#e5e7eb' }}>Fullstack Developer</strong> with
                a strong interest in building modern, scalable, and user-focused web applications. I enjoy
                working across both front-end and back-end to create smooth and reliable digital experiences.
            </p>

            <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: '#9ca3af',
                maxWidth: '560px',
                lineHeight: 1.85,
                marginBottom: '48px',
            }}>
                The tools and technologies I work with include{' '}
                <strong style={{ fontWeight: 600, color: '#e5e7eb' }}>React</strong>,{' '}
                <strong style={{ fontWeight: 600, color: '#e5e7eb' }}>Node.js</strong>,{' '}
                <strong style={{ fontWeight: 600, color: '#e5e7eb' }}>HTML</strong>,{' '}
                <strong style={{ fontWeight: 600, color: '#e5e7eb' }}>CSS</strong>, and{' '}
                <strong style={{ fontWeight: 600, color: '#e5e7eb' }}>MySQL</strong>.
            </p>

            <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '20px',
            }}>Education</h3>

            <div style={{
                backgroundColor: '#111111',
                border: '1px solid #222222',
                borderRadius: '12px',
                padding: '28px 40px',
                textAlign: 'left',
            }}>
                <p style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '8px',
                }}>B.Tech — Information Technology</p>
                <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    color: '#9ca3af',
                    marginBottom: '4px',
                }}>CAHCET, Anna University</p>
                <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    color: '#9ca3af',
                    marginBottom: '12px',
                }}>Currently Studying</p>
                <span style={{
                    backgroundColor: '#1e3a5f',
                    color: '#60a5fa',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    padding: '4px 14px',
                    borderRadius: '999px',
                }}>Currently Studying</span>
            </div>
        </section>
    );
}

export default About;