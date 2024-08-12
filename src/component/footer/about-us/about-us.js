import React from 'react';
import { Link } from 'react-router-dom';
import './about-us.css';
import taylorImage from './about-us-assets/taylor.png'; 
import jacobImage from './about-us-assets/jake.png';
import orangeRectangle from '../../../assets/orange-rectangle-2.png';
import linkedIn from './about-us-assets/linkedin.png'
import spotify from './about-us-assets/spotify.png'
import slack from './about-us-assets/slack.png'

function AboutUs() {
    return (
        <div className='team-section'>
            <h1>Built by SDRs</h1>
            <div className='team-container'>
                <div className='team-member'>
                    <img src={taylorImage} alt="Taylor Del Giudice" />
                    <h3>Taylor Del Giudice</h3>
                    <p>CEO & Co-founder</p>
                    <a href="https://www.linkedin.com/in/taylordelgiudice/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedIn} alt="LinkedIn" className='linkedin-icon' />
                    </a>
                </div>
                <div className='team-member'>
                    <img src={jacobImage} alt="Jacob DiCarlo" />
                    <h3>Jacob DiCarlo</h3>
                    <p>COO & Co-founder</p>
                    <a href="https://www.linkedin.com/in/jacobdicarlo/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedIn} alt="LinkedIn" className='linkedin-icon' />
                    </a>
                </div>
            </div>

            <div className='goal-section' style={{ backgroundImage: `url(${orangeRectangle})` }}>
                <p>
                    Jake and I were high volume cold callers for SDR teams at several different companies within the SaaS space. After 
                    evaluating existing solutions for parallel dialing, we sought out to create the first fully integrated cold calling platform that doesn’t 
                    break the bank for teams. <br/>
                </p>
                <p className='signature'>Taylor Del Giudice, Quack Co-founder & CEO</p>
            </div>

            <div className='goal-with-quack'>
                <h1>Our Goal with Quack</h1>
                <ul>
                    <li>Book you more meetings</li>
                    <li>Laser focus our product on cold calling</li>
                    <li>Always build with SDRs in mind</li>
                    <li>Make using a parallel dialer simple & easy</li>
                </ul>
            </div>
            <div className='connect-with-us'>
                <h1>Connect with Us!</h1>
                <div className='socials-container'>
                    <a href="https://www.linkedin.com/company/quackdials/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedIn} alt="LinkedIn" className='linkedin-icon' />
                    </a>
                    <a href="https://www.linkedin.com/company/quackdials/" target="_blank" rel="noopener noreferrer">
                        <img src={spotify} alt="LinkedIn" className='linkedin-icon' />
                    </a>
                    <a href="https://join.slack.com/t/quuuuuack/shared_invite/zt-2mvzyhvys-cUpS2RYJuq6KbkH~IORwGg" target="_blank" rel="noopener noreferrer">
                        <img src={slack} alt="LinkedIn" className='linkedin-icon' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
