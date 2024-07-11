import React, { useState, useRef, useEffect } from 'react';
import './homepage.styles.css';
import ratingImage from '../../assets/rating.png';
import trustedCompanies from '../../assets/trusted-companies.png';
import playButton from '../../assets/play-button.png';
import orangeArrow from '../../assets/orange-arrow.png';
import orangeRectangle from '../../assets/orange-rectangle.png'; // Import the existing orange rectangle image
import logoRectangle from '../../assets/logo-rectangle.png'; // Import the new logo rectangle image
import hubspotLogo from '../../assets/hubspot-logo.png'; // Correct logo imports
import salesloftLogo from '../../assets/salesloft-logo.png';
import outreachLogo from '../../assets/outreach-logo.png';
import quackVideo from '../../assets/quack-video.mp4';

function Homepage() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMonthly, setIsMonthly] = useState(true);
    const contentRefs = useRef([]);

    useEffect(() => {
        contentRefs.current.forEach((content, index) => {
            if (content) {
                content.style.maxHeight = activeIndex === index ? `${content.scrollHeight}px` : '0px';
            }
        });
    }, [activeIndex]);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleToggleClick = () => {
        setIsMonthly(!isMonthly);
    };

    //video play button react code
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayClick = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying(true);
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    };


    return (
        <>
            <div className='body-content'>
                <div className='body-main-content'>
                    <h1> More Conversations. <br/> More Pipeline. </h1>
                    <p> 
                        Quack is a parallel dialer that enables you to call multiple prospects <br />
                        simultaneously so you can speak to 2-3x more prospects per call block.
                    </p>
                    <img className='rating-image' src={ratingImage} alt='Rating' />
                    <a href="https://calendly.com/jakedicarlo/quack-dialer-demo-30min?month=2024-06" className='get-started-link'>
                        <button className='get-started-button'>Get Started</button>
                    </a>
                </div>

                <div className='trusted-by'>
                    <h5> Trusted by SDRs and AEs at companies like </h5>
                    <img className='trusted-companies-image' src={trustedCompanies} alt='Trusted Companies'/>
                </div>
            </div>

            <div className='prospecting-productivity'>
                <h5 className='quack-platform-text'>
                    The Quack Cold Calling Platform
                </h5>
                <h1>Unleash Prospecting <br/> Productivity.</h1>
                <p>
                    Quack transforms cold calling into an effective channel to book meetings. <br/>
                    Save hours per day & book more meetings over the phone.
                </p>
                <div className='video-section'>
                    <div className='video-container'>
                        <video ref={videoRef} id='video' className='video' src={quackVideo} controls={false} onClick={handlePlayClick}/>
                        {
                            !isPlaying && (
                                <img
                                    src={playButton}
                                    alt="Play button"
                                    className='play-button'
                                    onClick={handlePlayClick}
                                />
                            )
                        }
                    </div>

                </div>
                <div className='arrow-built-by-SDR'>
                    <img className='orange-arrow' src={orangeArrow} alt='Arrow'/>
                    <p className='sdrs-note'>
                        Built by SDRs with over 200,000 made cold calls
                    </p>
                </div>
            </div>

            <div className='accordion-container'>
                <div className='accordion-section'>
                    <div className='accordion-item'>
                        <div className='accordion-title' onClick={() => handleAccordionClick(0)}>
                            Parallel & Power Dialing <span>{activeIndex === 0 ? '-' : '+'}</span>
                        </div>
                        {activeIndex === 0 && <div className='accordion-content'>Content for Parallel & Power Dialing</div>}
                    </div>
                    <div className='accordion-item'>
                        <div className='accordion-title' onClick={() => handleAccordionClick(1)}>
                            No Place Left Behind <span>{activeIndex === 1 ? '-' : '+'}</span>
                        </div>
                        {activeIndex === 1 && <div className='accordion-content'>Content for No Place Left Behind</div>}
                    </div>
                    <div className='accordion-item'>
                        <div className='accordion-title' onClick={() => handleAccordionClick(2)}>
                            Some Analytics? <span>{activeIndex === 2 ? '-' : '+'}</span>
                        </div>
                        {activeIndex === 2 && <div className='accordion-content'>Content for Some Analytics?</div>}
                    </div>
                </div>

                <div className='accordion-image'>
                    <img src={orangeRectangle} alt="Orange Rectangle" />
                </div>
            </div>

            <div className='integrate-section'>
                <h1>Integrate with Existing Platforms</h1>
                <p>Allow Quack to make sure your platforms are always up to date even as you make dials in Quack</p>
                <div className='integration-box'>
                        <img src={logoRectangle} alt='Integration Box' />
                    </div>
                <div className='integration-container'>
                    <div className='integration-icons'>
                        <img className='integration-icon' src={hubspotLogo} alt='HubSpot' />
                        <img className='integration-icon' src={salesloftLogo} alt='Salesloft' />
                        <img className='integration-icon' src={outreachLogo} alt='Outreach' />
                    </div>
                    <div className='integration-icons-2'>
                        <img className='integration-icon' src={outreachLogo} alt='HubSpot' />
                        <img className='integration-icon' src={salesloftLogo} alt='Salesloft' />
                        <img className='integration-icon' src={hubspotLogo} alt='Outreach' />
                    </div>
                </div>
            </div>
            <div className="pricing-section">
                <h1>Does It Cost A Lot?</h1>
                <div className="toggle-buttons">
                    <button className={`toggle-button ${isMonthly ? 'active' : ''}`} onClick={handleToggleClick}>Monthly</button>
                    <button className={`toggle-button ${!isMonthly ? 'active' : ''}`} onClick={handleToggleClick}>Annual <span className="discount">25% OFF</span></button>
                </div>
                <div className="pricing-container">
                    <div className="pricing-cards">
                        <div className="pricing-card free">
                            <h3>Free Forever</h3>
                            <h4>$0 <span>/month</span></h4>
                            <ul>
                                <li>200 Dials Credits /month</li>
                                <li>SEP/CRM Integration</li>
                                <li>AI Call Notes</li>
                                <li className="disabled">24/7 Support</li>
                                <li className="disabled">Complete Documentation</li>
                                <li className="disabled">API Access</li>
                                <li className="disabled">AI Follow Up Emails</li>
                            </ul>
                            <button className="choose-plan">Choose plan</button>
                        </div>
                        <div className="pricing-card basic">
                            <h3>Basic</h3>
                            <h4>$40 <span>/month</span></h4>
                            <ul>
                                <li>1,000 Dials Credits /month</li>
                                <li>SEP/CRM Integration</li>
                                <li>Integration help</li>
                                <li className="disabled">24/7 Support</li>
                                <li className="disabled">Complete Documentation</li>
                                <li className="disabled">API Access</li>
                                <li className="disabled">AI Follow Up Emails</li>
                            </ul>
                            <button className="choose-plan">Choose plan</button>
                        </div>
                        <div className="pricing-card unlimited">
                            <h3>Unlimited <span className="most-popular">Most Popular</span></h3>
                            <h4>$75 <span>/month</span></h4>
                            <ul>
                                <li>Unlimited Dial Credits</li>
                                <li>SEP/CRM Integration</li>
                                <li>AI Call Notes</li>
                                <li>24/7 Support</li>
                            </ul>
                            <button className="choose-plan">Choose plan</button>
                        </div>
                    </div>
                    <div className="team-plans">
                        <div className="team-plans-content">
                            <h4>Team Plans</h4>
                            <p>Team Plan offers a comprehensive solution for sales teams looking to optimize their calling processes and drive better results.</p>
                        </div>
                        <button className="chat-with-us"><h3>Chat With Us</h3></button>
                    </div>
                </div>
            </div>
            <div className="questions-section">
                <h2>Your questions, answered</h2>
                {["What is Quack?", "How does it work?", "What are the benefits?", "How much does it cost?", "Is there a free trial?", "How do I sign up?"].map((question, index) => (
                    <div
                        key={index}
                        className={`question-box ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleAccordionClick(index)}
                    >
                        <div className="question-placeholder">Question {index + 1}: {question}</div>
                        <div className="question-content" ref={(el) => (contentRefs.current[index] = el)}>
                            Answer: This is the answer to question {index + 1}.
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Homepage;