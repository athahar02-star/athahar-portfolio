import React, { useEffect, useState } from 'react';

const projects = [
    {
        title: 'Study Planner App',
        description: 'A full-stack study management app for students to organize subjects, notes, assignments, and deadlines all in one place.',
        tech: ['React', 'Node.js', 'MySQL', 'Express'],
    },
    {
        title: 'E-Commerce Store',
        description: 'A complete online shopping platform with product listings, cart management, user authentication, and order tracking.',
        tech: ['React', 'MongoDB', 'JWT', 'CSS'],
    },
    {
        title: 'Todo Management App',
        description: 'A clean task management app with priority levels, due dates, and real-time filtering for daily productivity.',
        tech: ['React', 'JavaScript', 'LocalStorage', 'CSS'],
    },
    {
        title: 'Blog Platform',
        description: 'A fullstack blogging app where users can write, publish, edit, and comment on posts with a rich text editor.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    },
];

function Projects() {
    const [visible, setVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section style={{
            minHeight: '100vh',
            backgroundColor: '#000000',
            padding: '100px 40px 60px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '14px',
                }}>Projects</h2>
                <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    color: '#6b7280',
                }}>A selection of projects I have worked on during my learning journey.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                {projects.map((project, index) => (
                    <div key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            backgroundColor: hoveredIndex === index ? '#1a1a1a' : '#161616',
                            border: hoveredIndex === index ? '1px solid #333' : '1px solid #222',
                            borderRadius: '14px',
                            padding: '32px 28px',
                            transition: 'all 0.25s ease',
                            transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                            boxShadow: hoveredIndex === index ? '0 12px 40px rgba(0,0,0,0.5)' : 'none',
                        }}>
                        <h3 style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: '1.15rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            marginBottom: '14px',
                        }}>{project.title}</h3>
                        <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.875rem',
                            color: '#9ca3af',
                            lineHeight: 1.75,
                            marginBottom: '24px',
                        }}>{project.description}</p>
                        <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.8rem',
                            color: '#6b7280',
                        }}>{project.tech.join(' • ')}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;