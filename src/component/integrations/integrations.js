// src/components/use-cases/use-cases.js
import React from 'react';
import './integrations.css';
import orangeRectangle from './integrations-asset/orange-rectangle.png'
import salesloftLogo from '../../assets/salesloft-logo.png';
import hubspotLogo from '../../assets/hubspot-logo.png';
import outreachLogo from '../../assets/outreach-logo.png';
import apolloLogo from './integrations-asset/apollo-logo.png'
import csvLogo from'./integrations-asset/csv-logo.png'

// import outreachImage from './integrations-asset/outreach-card.png';
// import salesloftImage from './integrations-asset/salesloft-card.png';
// import hubspotImage from './integrations-asset/hubspot-card.png';
// import apolloImage from './integrations-asset/apollo-card.png';
// import csvImage from './integrations-asset/csv-card.png';

function Integrations() {
    // const integrations = [
    //     { image: outreachImage, name: "Outreach.io", description: "Seamlessly import your call tasks from Outreach, filter your call list down if needed, and complete your call tasks 10X more efficiently.", buttonText: "Connect" },
    //     { image: salesloftImage, name: "Salesloft", description: "Seamlessly import your call tasks from Salesloft, filter your call list down if needed, and complete your call tasks 10X more efficiently.", buttonText: "Connect" },
    //     { image: hubspotImage, name: "Hubspot", description: "Seamlessly import your call tasks from Hubspot, filter your call list down if needed, and complete your call tasks 10X more efficiently.", buttonText: "Join Beta" },
    //     { image: apolloImage, name: "Apollo", description: "Seamlessly import your call tasks from Apollo, filter your call list down if needed, and complete your call tasks 10X more efficiently.", buttonText: "Join Waitlist" },
    //     { image: csvImage, name: "CSV", description: "Seamlessly import prospects from a spreadsheet, filter your call list down if needed, and dial through a pre-made list of prospects.", buttonText: "Join Waitlist" }
    // ];

    return (
        <>
            <div className="integrate-container">
                <div className="orange-rectangle">
                    <img src={orangeRectangle} alt="Orange Rectangle" className="rectangle-image" />
                    <div className="content">
                        <h1>Integrate with Outreach, Salesloft, Hubspot & more!</h1>
                        <p>Effortlessly connect to your sales platform to import prospects, sequences, call tasks & notes to supercharge your prospecting efforts.</p>
                        <a href="https://example.com" className="cta-button">Get Quack for free</a>
                    </div>
                </div>

                <div className="logos">
                    <img src={salesloftLogo} alt="Salesloft Logo" className="logo" />
                    <img src={hubspotLogo} alt="Hubspot Logo" className="logo" />
                    <img src={outreachLogo} alt="Outreach Logo" className="logo" />
                </div>
            </div>

            <div className="featured-integrations-container">
                <h2>Featured Integrations</h2>
                <div className="integration-card">
                    <img src={outreachLogo} alt="Outreach Logo" className="integration-logo" />
                    <div className="integration-content">
                        <h3>Outreach.io</h3>
                        <p>Seamlessly import your call tasks from Outreach, filter your call list down if needed, and complete your call tasks 10X more efficiently.</p>
                    </div>
                    <button className="integration-button">Connect</button>
                </div>
                <div className="integration-card">
                    <img src={salesloftLogo} alt="Salesloft Logo" className="integration-logo" />
                    <div className="integration-content">
                        <h3>Salesloft</h3>
                        <p>Seamlessly import your call tasks from Salesloft, filter your call list down if needed, and complete your call tasks 10X more efficiently.</p>
                    </div>
                    <button className="integration-button">Connect</button>
                </div>
                <div className="integration-card">
                    <img src={hubspotLogo} alt="Hubspot Logo" className="integration-logo" />
                    <div className="integration-content">
                        <h3>Hubspot</h3>
                        <p>Seamlessly import your call tasks from Hubspot, filter your call list down if needed, and complete your call tasks 10X more efficiently.</p>
                    </div>
                    <button className="integration-button">Join Beta</button>
                </div>
                <div className="integration-card">
                    <img src={apolloLogo} alt="Apollo Logo" className="integration-logo" />
                    <div className="integration-content">
                        <h3>Apollo</h3>
                        <p>Seamlessly import your call tasks from Apollo, filter your call list down if needed, and complete your call tasks 10X more efficiently.</p>
                    </div>
                    <button className="integration-button">Join Waitlist</button>
                </div>
                <div className="integration-card">
                    <img src={csvLogo} alt="CSV Logo" className="integration-logo" />
                    <div className="integration-content">
                        <h3>CSV</h3>
                        <p>Seamlessly import prospects from a spreadsheet, filter your call list down if needed, and dial through a pre-made list of prospects.</p>
                    </div>
                    <button className="integration-button">Join Waitlist</button>
                </div>
            </div>
        </>
    );
}

export default Integrations;
