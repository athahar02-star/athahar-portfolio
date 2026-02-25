import React from 'react';

function Navbar({ activePage, setActivePage }) {
    const pages = ['Home', 'About', 'Projects', 'Contact'];

    return (
        <nav style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 100,
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 40px',
            height: '64px',
            boxShadow: '0 1px 0 rgba(0,0,0,0.08)',
        }}>
            <div onClick={() => setActivePage('Home')} style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '1.25rem',
                color: '#000000',
                cursor: 'pointer',
            }}>
                Athahar
            </div>
            <ul style={{ display: 'flex', gap: '36px', listStyle: 'none' }}>
                {pages.map((page) => (
                    <li key={page}>
                        <button onClick={() => setActivePage(page)} style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.95rem',
                            fontWeight: activePage === page ? 600 : 400,
                            color: activePage === page ? '#000000' : '#555555',
                            padding: '4px 0',
                            borderBottom: activePage === page ? '2px solid #000000' : '2px solid transparent',
                            transition: 'all 0.2s ease',
                        }}>
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;