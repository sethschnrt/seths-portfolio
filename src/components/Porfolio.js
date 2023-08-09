import React from 'react';
import techBlogImage from '../assets/tech-blog.png';
import weatherDashboardImage from '../assets/weather-dashboard.png';
import noteTakerImage from '../assets/Note-Taker.png';

function Portfolio() {
    return (
        <section className="portfolio-section">
           <h2>My Porfolio</h2>
           <div className="projects-container">
                <div className="project-wrapper">
                <div className="project">
                    <img src={techBlogImage} alt="Tech Blog" className="project-image"/>
                    <div className="project-content">
                        <h3>Tech Blog</h3>
                        <p>Short description of the project...</p>
                    </div>
                </div>
                <div className="project-buttons">
                    <a href="YOUR_PROJECT_1_LIVE_LINK" target="_blank" rel="noopener noreferrer" className="btn-live">Visit Site</a>
                    <a href="YOUR_PROJECT_1_GITHUB_REPO_LINK" target="_blank" rel="noopener noreferrer" className="btn-repo">GitHub Repo</a>
                </div>
                </div>
                <div className="project-wrapper">
                <div className="project">
                    <img src={weatherDashboardImage} alt="Weather Dashboard" className="project-image"/>
                    <div className="project-content">
                        <h3>Weather Dashboard</h3>
                        <p>Short description of the project...</p>
                    </div>
                </div>
                <div className="project-buttons">
                    <a href="YOUR_PROJECT_1_LIVE_LINK" target="_blank" rel="noopener noreferrer" className="btn-live">Visit Site</a>
                    <a href="YOUR_PROJECT_1_GITHUB_REPO_LINK" target="_blank" rel="noopener noreferrer" className="btn-repo">GitHub Repo</a>
                </div>
                </div>
                <div className="project-wrapper">
                <div className="project">
                    <img src={noteTakerImage} alt="Note Taker" className="project-image"/>
                    <div className="project-content">
                        <h3>Note Taker</h3>
                        <p>Short description of the project...</p>
                    </div>
                </div>
                <div className="project-buttons">
                    <a href="YOUR_PROJECT_1_LIVE_LINK" target="_blank" rel="noopener noreferrer" className="btn-live">Visit Site</a>
                    <a href="YOUR_PROJECT_1_GITHUB_REPO_LINK" target="_blank" rel="noopener noreferrer" className="btn-repo">GitHub Repo</a>
                </div>
                </div>
           </div>
        </section>
    );
}

export default Portfolio;