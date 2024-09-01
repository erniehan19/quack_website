import React, {useState} from 'react';
import './use-cases.css';
import trustedCompanies from '../../assets/trusted-companies.png';
import orangeRectangle2 from '../../assets/orange-rectangle.png';
import boastLogo from '../../assets/boast-logo.png';
import profileImage from '../../assets/dan-dumond.png';
import userPhoto from './assets/users.png'
import dueTasks from './assets/due-tasks.png'
import callBlocks from './assets/call-blocks.png'

function UseCases() {
    const [selectedTab, setSelectedTab] = useState('SDRs');

    const renderContent = () => {
        switch(selectedTab) {
            case 'SDRs':
                return (
                    <>
                        <div class="feature-container-use-cases">
                            <div class="feature-card-use-cases">
                                <img src={dueTasks} alt='user' />
                                <div class="feature-content-use-cases">
                                    <h2>Who wants to spend 4 hours dialing anymore?</h2>
                                    <p>Parallel dialing allows you to dial 10X faster, getting you to more conversations in way less time than dialing prospects 1 by 1 out of an SEP.</p>
                                </div>
                            </div>
                            <div class="feature-card-use-cases">
                                <img src={userPhoto} alt='user' />
                                <div class="feature-content-use-cases">
                                    <h2>Dial 10X more prospects</h2>
                                    <p>It takes 8 cold calls attempts on average to get someone on the phone. Reach out to more prospects & touch existing ones 4-5X more.</p>
                                </div>
                            </div>
                        </div>

                        <div className="features-testimonial-container">
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
                            <div className="feature-item">
                                <div className="feature-text">
                                    <h2>Easy set-up</h2>
                                </div>
                                <div className="feature-image">
                                    <img src={orangeRectangle2} alt="Quack Insights" />
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-text">
                                    <h2>Less Time listening <br /> to a dial tone</h2>
                                </div>
                                <div className="feature-image">
                                    <img src={orangeRectangle2} alt="Quack Insights" />
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-text">
                                    <h2>More conversations</h2>
                                </div>
                                <div className="feature-image">
                                    <img src={orangeRectangle2} alt="Quack Insights" />
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'Account Executives':
                return (
                    <>
                        <div class="feature-container-use-cases">
                            <div class="feature-card-use-cases">
                                <img src={callBlocks} alt='user' />
                                <div class="feature-content-use-cases">
                                    <h2>Get your dials in during your <br/> busy schedule</h2>
                                    <p>
                                       We know that doing demos, getting docusigns <br/>
                                       signed, and booking your own deals is a lot of work. <br/>
                                       So we make the last part a lot easier.
                                    </p>
                                </div>
                            </div>
                            <div class="feature-card-use-cases">
                                <img src={userPhoto} alt='user' />
                                <div class="feature-content-use-cases">
                                    <h2>Dial 10X more prospects</h2>
                                    <p>It takes 8 cold calls attempts on average to get someone on the phone. Reach out to more prospects & touch existing ones 4-5X more.</p>
                                </div>
                            </div>
                        </div>

                        <div className="features-testimonial-container">
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
                            <div className="feature-item">
                                <div className="feature-text">
                                    <h2>Easy set-up</h2>
                                </div>
                                <div className="feature-image">
                                    <img src={orangeRectangle2} alt="Quack Insights" />
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'SDR Managers':
                return (
                    <>
                    <div class="feature-container-use-cases">
                            <div class="feature-card-use-cases">
                                <img src={userPhoto} alt='user' />
                                <div class="feature-content-use-cases">
                                    <h2>Who wants to spend 4 hours dialing anymore?</h2>
                                    <p>Parallel dialing allows you to dial 10X faster, getting you to more conversations in way less time than dialing prospects 1 by 1 out of an SEP.</p>
                                </div>
                            </div>
                            <div class="feature-card-use-cases">
                                <img src={userPhoto} alt='user' />
                                <div class="feature-content-use-cases">
                                    <h2>Dial 10X more prospects</h2>
                                    <p>It takes 8 cold calls attempts on average to get someone on the phone. Reach out to more prospects & touch existing ones 4-5X more.</p>
                                </div>
                            </div>
                        </div>

                        <div className="features-testimonial-container">
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
                            <div className="feature-item">
                                <div className="feature-text">
                                    <h2>Efficient Gains</h2>
                                </div>
                                <div className="feature-image">
                                    <img src={orangeRectangle2} alt="Quack Insights" />
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-text">
                                    <h2>Ramp SDRs Quicker <br /> to a dial tone</h2>
                                </div>
                                <div className="feature-image">
                                    <img src={orangeRectangle2} alt="Quack Insights" />
                                </div>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='content-wrapper'>
                    <div className='gradient-background'>
                        <div className='text-content'>
                            <h2>Parallel & Power Dialer for SDRs</h2>
                            <h1>AI powered dialer that gets you <br /> more meetings in 10% of the time</h1>
                            <p>Quack turns 3 hours of dialing into 20 minutes while significantly boosting <br/>connect rates, conversations & booked meetings.</p>
                            <a href="https://calendly.com/jakedicarlo/quack-dialer-demo-30min?month=2024-06" className='get-started-link'>
                                <button className='cta-button'>Get Started</button>
                            </a>
                            <div className='logos'>
                                <img src={trustedCompanies} alt='Trusted Companies' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tabs'>
                <button
                    className={selectedTab === 'SDRs' ? 'active' : ''}
                    onClick={() => setSelectedTab('SDRs')}
                >
                    SDRs
                </button>
                <button
                    className={selectedTab === 'Account Executives' ? 'active' : ''}
                    onClick={() => setSelectedTab('Account Executives')}
                >
                    Account Executives
                </button>
                <button
                    className={selectedTab === 'SDR Managers' ? 'active' : ''}
                    onClick={() => setSelectedTab('SDR Managers')}
                >
                    SDR Managers
                </button>
            </div>
            <div className='tab-content'>
                {renderContent()}
            </div>
        </div>
    );
}

export default UseCases;