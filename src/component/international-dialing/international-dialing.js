// src/components/use-cases/use-cases.js
import React from 'react';
import trustedCompanies from '../../assets/trusted-companies.png';
import './international-dialing.css';
import orangeRectangle from '../../assets/orange-rectangle-2.png';
import orangeRectangle2 from '../../assets/orange-rectangle.png';

function InternationalDialing() {
    return (
        <>
            <div className='parallel-power-dialing-container'>
                <h1>International Dialing</h1>
                <p>
                    Dial into nearly every country with Quack for no additional <br />
                    costs. The ultimate dialing solution for international teams or <br/>
                    teams looking to expand.
                </p>
                <a href="https://calendly.com/jakedicarlo/quack-dialer-demo-30min?month=2024-06" className='get-quack-link'>
                    <button>Get Quack for free</button>
                </a>
            </div>

            <div className='trusted-by'>
                <img className='trusted-companies-image' src={trustedCompanies} alt='Trusted Companies'/>
            </div>

            <div className="orange-rectangle">
                    <img src={orangeRectangle} alt="Orange Rectangle" className="orange-rectangle-img" />
            </div>

            <div className="key-features-container">
                <div className="feature-item">
                    <div className="feature-text">
                        <h2>BYON</h2>
                        <p>Verify any number internationally for custom caller-ID.</p>
                    </div>
                    <div className="feature-image">
                        <img src={orangeRectangle2} alt="Quack Insights" />
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-text">
                        <h2>Call Internationally</h2>
                    </div>
                    <div className="feature-image">
                        <img src={orangeRectangle2} alt="Quack Insights" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default InternationalDialing;
