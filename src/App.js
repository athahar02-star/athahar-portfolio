import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const [activePage, setActivePage] = useState('Home');

    const renderPage = () => {
        if (activePage === 'Home') return <Home />;
        if (activePage === 'About') return <About />;
        if (activePage === 'Projects') return <Projects />;
        if (activePage === 'Contact') return <Contact />;
        return <Home />;
    };

    return (
        <div>
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            {renderPage()}
        </div>
    );
}

export default App;