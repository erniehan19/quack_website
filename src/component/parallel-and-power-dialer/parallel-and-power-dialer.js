import React from 'react';
import trustedCompanies from '../../assets/trusted-companies.png';
import './parallel-and-power-dialer.css';
import card1 from '../../assets/click-integration.png';
import card2 from '../../assets/simple-to-use.png';
import card3 from '../../assets/10x-faster-dialing.png';
import boastLogo from '../../assets/boast-logo.png';
import profileImage from '../../assets/dan-dumond.png';
import orangeRectangle from '../../assets/orange-rectangle-2.png';

import parallelDialingImg from '../../assets/parallel-dialing.png';
import powerDialingImg from '../../assets/power-dialing.png';
import notesSyncImg from '../../assets/notes-sync.png';
import callRecordingsImg from '../../assets/call-recordings.png';
import advancedFiltrationImg from '../../assets/advanced-filtration.png';
import internationalDialingImg from '../../assets/international-dialing.png';

function ParallelAndPowerDialer() {
    return (
        <>
            <div className='parallel-power-dialing-container'>
                <h1>Parallel & Power Dialing</h1>
                <p>
                    Seamlessly call through your prospect list in minutes while <br /> 
                    boosting your connect rates and conversations.
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
                <div className="features">
                    <img src={card1} alt="1-click integration" className="feature-card" />
                    <img src={card2} alt="Simple to use" className="feature-card" />
                    <img src={card3} alt="10X Faster Dialing" className="feature-card" />
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
                        <h2>Parallel Dialing</h2>
                        <p>
                            Dial up to 4 prospects simultaneously while <br />
                            Quack's voicemail detection auto-logs unanswered calls <br/>
                            & connects you to the first prospect to answer.
                        </p>
                    </div>
                    <div className="feature-image">
                        <img src={parallelDialingImg} alt="Parallel Dialing" />
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-text">
                        <h2>Power Dialing</h2>
                        <p>Rapidly dial through prospects while Quack automatically <br />
                            detects voicemails & logs unanswered calls.
                        </p>
                    </div>
                    <div className="feature-image">
                        <img src={powerDialingImg} alt="Power Dialing" />
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-text">
                        <h2>Notes Sync</h2>
                        <p>
                           View & edit prospect, account & call notes with a <br/>
                           bi-directional sync between Quack & your SEP.
                        </p>
                    </div>
                    <div className="feature-image">
                        <img src={notesSyncImg} alt="Notes Sync" />
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-text">
                        <h2>Call Recordings</h2>
                        <p>All call recordings are synced back into your SEP or CRM platforms.</p>
                    </div>
                    <div className="feature-image">
                        <img src={callRecordingsImg} alt="Call Recordings" />
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-text">
                        <h2>Advanced Filtration</h2>
                    </div>
                    <div className="feature-image">
                        <img src={advancedFiltrationImg} alt="Advanced Filtration" />
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-text">
                        <h2>International Dialing</h2>
                    </div>
                    <div className="feature-image">
                        <img src={internationalDialingImg} alt="International Dialing" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default ParallelAndPowerDialer;
