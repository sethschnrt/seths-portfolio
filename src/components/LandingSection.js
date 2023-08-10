import React from 'react';
import portraitImage from '../assets/IMG_0189.jpeg';
function LandingSection() {
    return (
        <section className="landing-section">
            <img src={portraitImage} alt="Portrait of Me" className="portrait"/>
            <div className="overlay-content">
                <div className="first-name">SETH</div>
                <div className="last-name">SCHOENERT</div>
                <p>Fullstack Developer</p>
                <a className="resumeButton" href="/assets/resume1.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
            </div>
            
        </section>
    );
}

export default LandingSection;