import React, {useState} from 'react';
import './pricing.css'
import orumLogo from './assets/orum-logo.png'
import nooksLogo from './assets/nooks-logo.png'
import phoneBurnerLogo from './assets/phone-burner-logo.png'
import quackLogo from '../../assets/logo.png'
import checkMark from './assets/checkmark.png'

function Pricing() {

    const [pricing, setPricing] = useState('monthly')

    const togglePricing = () => {
        switch (pricing) {
            case 'monthly':
                return (
                    <>
                        <div className="pricing-container">
                            <div className="pricing-cards">
                                <div className="pricing-card free">
                                    <h3>Free Forever</h3>
                                    <h4>$0 <span>/month</span> </h4> 
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
                        </div>
                    </>

                )

            case 'annual':
                return (
                    <>
                        <div className="pricing-container">
                            <div className="pricing-cards">
                                <div className="pricing-card free">
                                    <h3>Free Forever</h3>
                                    <h4>$0 <span>/month</span> </h4> 
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
                                    <h4>$385 <span>/month</span></h4>
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
                                    <h4>$720 <span>/month</span></h4>
                                    <ul>
                                        <li>Unlimited Dial Credits</li>
                                        <li>SEP/CRM Integration</li>
                                        <li>AI Call Notes</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                    <button className="choose-plan">Choose plan</button>
                                </div>
                            </div>
                        </div>
                    </>
                )

            default:
                return null;
        }
    }

    const [dropdown, setDropdown] = useState(false)
    const [logo, setLogo] = useState('orum')

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const toggleLogo = (logo) => {
        setLogo(logo);
        setDropdown(false);
    };

    const renderLogoContent = () => {
        switch(logo) {
            case 'orum':
                return (
                    <div className="comparison-table">
                        <div className="comparison-header">
                            <div className="comparison-brand">

                            </div>
                            <div className="comparison-brand" onClick={toggleDropdown}>
                                <img src={orumLogo} alt="Orum Logo" />
                                <span>▼</span>
                            </div>
                            <div className="comparison-brand">
                                <img src={quackLogo} alt="Quack Logo" />
                            </div>
                        </div>
                        {dropdown && <DropDown toggleLogo={toggleLogo} />}
                        <div className="comparison-row">
                            <div className="comparison-feature">SMB Affordability</div>
                            <div className="comparison-brand-feature">X</div>
                            <div className="comparison-brand-feature"><img src={checkMark} alt="Check" /></div>
                        </div>
                        <div className="comparison-row">
                            <div className="comparison-feature">International Dialing</div>
                            <div className="comparison-brand-feature">X</div>
                            <div className="comparison-brand-feature"><img src={checkMark} alt="Check" /></div>
                        </div>
                        <div className="comparison-row">
                            <div className="comparison-feature">Dialer Focused</div>
                            <div className="comparison-brand-feature">X</div>
                            <div className="comparison-brand-feature"><img src={checkMark} alt="Check" /></div>
                        </div>
                    </div>
                )

            case 'nooks':
                return (
                    <div className="comparison-table">
                        <div className="comparison-header">
                            <div className="comparison-brand">

                            </div>
                            <div className="comparison-brand" onClick={toggleDropdown}>
                                <img src={nooksLogo} alt="Nooks Logo" />
                                <span>▼</span>
                            </div>
                            <div className="comparison-brand">
                                <img src={quackLogo} alt="Quack Logo" />
                            </div>
                        </div>
                        {dropdown && <DropDown toggleLogo={toggleLogo} />}
                        <div className="comparison-row">
                            <div className="comparison-feature">Monthly Contracts</div>
                            <div className="comparison-brand-feature">X</div>
                            <div className="comparison-brand-feature"><img src={checkMark} alt="Check" /></div>
                        </div>
                        <div className="comparison-row">
                            <div className="comparison-feature">International Dialing</div>
                            <div className="comparison-brand-feature">X</div>
                            <div className="comparison-brand-feature"><img src={checkMark} alt="Check" /></div>
                        </div>
                        <div className="comparison-row">
                            <div className="comparison-feature">Dialer Centric Tools</div>
                            <div className="comparison-brand-feature">X</div>
                            <div className="comparison-brand-feature"><img src={checkMark} alt="Check" /></div>
                        </div>
                    </div>
                )

            case 'phone-burner':
                return (
                    <div className="comparison-table">
                        <div className="comparison-header">
                            <div className="comparison-brand">

                            </div>
                            <div className="comparison-brand" onClick={toggleDropdown}>
                                <img src={phoneBurnerLogo} alt="Phone Burner Logo" />
                                <span>▼</span>
                            </div>
                            <div className="comparison-brand">
                                <img src={quackLogo} alt="Quack Logo" />
                            </div>
                        </div>
                        {dropdown && <DropDown toggleLogo={toggleLogo}/>}
                        <div className="comparison-row">
                            <div className="comparison-feature">Built for SDRs</div>
                            <div className="comparison-brand-feature">X</div>
                            <div className="comparison-brand-feature"><img src={checkMark} alt="Check" /></div>
                        </div>
                        <div className="comparison-row">
                            <div className="comparison-feature">International Dialing</div>
                            <div className="comparison-brand-feature">X</div>
                            <div className="comparison-brand-feature"><img src={checkMark} alt="Check" /></div>
                        </div>
                    </div>
                )
            default:
                return null;
        }
    }

    // Helper Functions
    const DropDown = ( {toggleLogo}) => (
        <div className='dropdown-content-2'>
            <div className='dropdown-item-2' onClick={() => toggleLogo('orum')}>
                <img src={orumLogo} alt='Orum logo'/>
            </div>
            <div className='dropdown-item-2' onClick={() => toggleLogo('nooks')}>
                <img src={nooksLogo} alt='Nooks logo'/>
            </div>
            <div className='dropdown-item-2' onClick={() => toggleLogo('phone-burner')}>
                <img src={phoneBurnerLogo} alt='Phone Burner logo'/>
            </div>
        </div>
    );

    return (
        <>
            <div className='tabs'>
                <button
                    className={pricing === 'monthly' ? 'active' : ''}
                    onClick={() => setPricing('monthly')}
                >
                    Monthly
                </button>
                <button
                    className={pricing === 'annual' ? 'active' : ''}
                    onClick={() => setPricing('annual')}
                >
                    Annual
                </button>
            </div>

            <div className='tab-content'>
                {togglePricing()}
            </div>

            <div className="comparison-container">
                <h2>How does Quack stack up against Nooks and others</h2>
                <p>
                    Quack is a great choice for SDR teams looking for <br/>
                    something other than Nooks. It’s just useful, helping <br/>
                    create more conversations on the phone.
                </p>
            </div>
            {/* <div className='dropdown-container'>
                <div className='dropdown-header' onClick={toggleDropdown}>
                    <img src={
                          logo === 'orum' ? orumLogo 
                        : logo === 'nooks' ? nooksLogo 
                        : logo === 'phone-burner' ? phoneBurnerLogo: orumLogo} 
                        alt='logo'
                    />
                    <span>▼</span>
                </div>
                {dropdown && (
                    <div className='dropdown-content'>
                        <div className='dropdown-item' onClick={toggleLogo('orum')}>
                            <img src={orumLogo} alt='Orum logo'/>
                        </div>
                        <div className='dropdown-item' onClick={toggleLogo('nooks')}>
                            <img src={nooksLogo} alt='Nooks logo'/>
                        </div>
                        <div className='dropdown-item' onClick={toggleLogo('phone-burner')}>
                            <img src={phoneBurnerLogo} alt='Phone Burner logo'/>
                        </div>
                    </div>
                )}
            </div> */}
            {renderLogoContent()}
        </>
    )

}


export default Pricing;
