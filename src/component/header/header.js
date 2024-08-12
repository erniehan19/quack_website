import React, { useState, useRef, useEffect } from 'react';
import './header.styles.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import parallelPowerDialingIcon from '../../assets/parallel-power-dialing-icon.png';
import analyticsContentCardsIcon from '../../assets/analytics-content-crads-icon.png';
import internationalDialingIcon from '../../assets/international-dialing-icon.png';
import sepsCrmsIcon from '../../assets/seps-crms-icon.png';

function Header() {
    const dropdownRef = useRef(null);

    // Product & Integration dropdown state
    const [dropDown, setDropDown] = useState(false);
    const dropDownToggle = () => {
        setDropDown(!dropDown);
    };

    // Handle click outside the dropdown
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropDown(false);
        }
    };

    // Add event listener for clicks
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='header'>
            <div className='header-container'>
                <div className='logo'>
                    <Link to="/"> <img src={logo} alt='Quack Logo' /> </Link>
                </div>
                <div className='navbar'>
                    <ul className='nav-links'>
                        <li className='dropdown-toggle' onClick={dropDownToggle}> Product & Integrations
                            {dropDown && (
                                <div className='dropdown-content' ref={dropdownRef}>
                                    <div className='dropdown-section'>
                                        <h4>Product</h4>
                                        <ul>
                                            <li>
                                                <Link to="/parallel-and-power-dialer">
                                                    <img src={parallelPowerDialingIcon} alt="Parallel & Power Dialing" className="dropdown-icon" />
                                                    <div>
                                                        <strong>Parallel & Power <br/> Dialing</strong>
                                                        <span> Leverage AI voicemail detection & up to 4-line dialing</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/analytics-and-content-cards">
                                                    <img src={analyticsContentCardsIcon} alt="Analytics & Content Cards" className="dropdown-icon" />
                                                    <div>
                                                        <strong>Analytics & Content Cards</strong>
                                                        <span> Analyze call performance</span>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/international-dialing">
                                                    <img src={internationalDialingIcon} alt="International Dialing" className="dropdown-icon" />
                                                    <div>
                                                        <strong>International Dialing</strong>
                                                        <span> Dial into 50+ countries with a custom caller-ID</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='dropdown-section'>
                                        <h4>Integrations</h4>
                                        <ul>
                                            <li>
                                                <Link to="/integrations">
                                                    <img src={sepsCrmsIcon} alt="SEPs & CRMs" className="dropdown-icon" />
                                                    <div>
                                                        <strong>SEPs & CRMs</strong>
                                                        <span> Directly connect with your desired integration</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link to="/use-cases" className='nav-link'>Use Cases</Link>
                        </li>
                        <li>
                            <a href="https://join.slack.com/t/quuuuuack/shared_invite/zt-2mvzyhvys-cUpS2RYJuq6KbkH~IORwGg" className='nav-link'>Community</a>
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
