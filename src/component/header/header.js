import React from 'react';
import './header.styles.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='logo'>
                    <Link to="/"> <img src={logo} alt='Quack Logo' /> </Link>
                </div>
                <div className='navbar'>
                    <ul className='nav-links'>
                        <li>
                            <Link to="/product-integrations" className='nav-link'>Product & Integrations</Link>
                        </li>
                        <li>
                            <Link to="/use-cases" className='nav-link'>Use Cases</Link>
                        </li>
                        <li>
                            <Link to="/community" className='nav-link'>Community</Link>
                        </li>
                        <li>
                            <Link to="/pricing" className='nav-link'>Pricing</Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar-login-get-started'>
                    <ul className='nav-links-2'>
                        <li className='login'>Login</li>
                        <li>
                            <a href="https://calendly.com/jakedicarlo/quack-dialer-demo-30min?month=2024-06" className='get-started-link'>
                                <button className='header-get-started-button'>Get Started</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
