// src/components/use-cases/use-cases.js
import React from 'react';
import trustedCompanies from '../../assets/trusted-companies.png';
import './analytics-and-contents-cards.css';
import boastLogo from '../../assets/boast-logo.png';
import profileImage from '../../assets/dan-dumond.png';
import orangeRectangle from '../../assets/orange-rectangle-2.png';

import teamAnalyticsImg from './analytics-and-contents-cards-asset/team-analytics.png';
import contentCardsImg from './analytics-and-contents-cards-asset/content-cards.png';
import dataSyncImg from './analytics-and-contents-cards-asset/data-sync.png';
import quackInsightsImg from './analytics-and-contents-cards-asset/orange-rectangle.png';

function AnalyticsAndContentsCard() {
    return (
        <>
            <div className='parallel-power-dialing-container'>
                <h1>Analytics & Content Cards</h1>
                <p>
                    Empower managers & reps with dialer analytics. Data is also <br/>
                    pushed back into your CRM & SEP platforms.
                </p>
                <a href="https://calendly.com/jakedicarlo/quack-dialer-demo-30min?month=2024-06" className='get-quack-link'>
                    <button>Get Quack for free</button>
                </a>
            </div>

            <div className='trusted-by'>
                <img className='trusted-companies-image' src={trustedCompanies} alt='Trusted Companies'/>
            </div>

            <div className="features-testimonial-container">
                <div className="orange-rectangle">
                    <img src={orangeRectangle} alt="Orange Rectangle" className="orange-rectangle-img" />
                </div>
                <div className="testimonial">
                    <img src={boastLogo} alt="Boast Logo" className="boast-logo" />
                    <p className="testimonial-quote">
                        "Quack has made my call tasks a breeze to complete. The number of calls that go to voicemail can get time-consuming. Dialing 4 prospects at a time drastically increased my call volumes and connection rates."
                    </p>
                    <div className="testimonial-profile">
                        <img src={profileImage} alt="Dan Dumond" className="profile-image" />
                        <div className="profile-info">
                            <p className="profile-name">Dan Dumond</p>
                            <p className="profile-title">SDR, Boast AI</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="key-features-container">
                <h1>Key Features</h1>
                <div className="feature-item">
                    <div className="feature-text">
                        <h2>Team Analytics</h2>
                        <p>All call recordings are synced back into your SEP or CRM platforms.</p>
                    </div>
                    <div className="feature-image">
                        <img src={teamAnalyticsImg} alt="Team Analytics" />
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-text">
                        <h2>Content Cards</h2>
                        <p>All call recordings are synced back into your SEP or CRM platforms.</p>
                    </div>
                    <div className="feature-image">
                        <img src={contentCardsImg} alt="Content Cards" />
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-text">
                        <h2>Data Sync</h2>
                        <p>All call recordings are synced back into your SEP or CRM platforms.</p>
                    </div>
                    <div className="feature-image">
                        <img src={dataSyncImg} alt="Data Sync" />
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-text">
                        <h2>Quack Insights</h2>
                        <p>All call recordings are synced back into your SEP or CRM platforms.</p>
                    </div>
                    <div className="feature-image">
                        <img src={quackInsightsImg} alt="Quack Insights" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnalyticsAndContentsCard;
