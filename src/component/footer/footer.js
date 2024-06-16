import React from 'react';
import './footer.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <h2>Start <span>Quackin</span> today</h2>
            <a href="https://calendly.com/jakedicarlo/quack-dialer-demo-30min?month=2024-06" className='get-started-link'>
                <button className='get-demo-button'>Get Demo</button>
            </a>
            <div className='footer-links'>
                <div className='footer-column logo-column'>
                    <Link to="/" ><img src={logo} alt='Logo' className='footer-logo' /></Link>
                </div>
                <div className='footer-column'>
                    <h4>Product & Integrations</h4>
                    <ul>
                        <li><Link to="/parallel-and-power-dialer" className='nav-link'>Parallel & Power Dialer</Link></li>
                        <li><Link to="/analytics-and-content-cards" className='nav-link'>Analytics & Content Cards</Link></li>
                        <li><Link to="/international-dialing" className='nav-link'>International Dialing</Link></li>
                        <li><Link to="/integrations" className='nav-link'>Integrations</Link></li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4>Resources</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Slack Community</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className='footer-column'>
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Referrals & Partnerships</li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>Made with ♥ in Calgary</p>
            </div>
        </div>
    )
}

export default Footer;