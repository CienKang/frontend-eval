import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar= () => {
    const handleLogoClick = () => {
        window.location.href = '/';
    };
    return ( 
        <header>
            <span onClick={handleLogoClick}>EVENTIFY</span>
        </header>
    );
};
 
export default Navbar;