import React from 'react';
import techBlogImage from '../assets/tech-blog.png';
import weatherDashboardImage from '../assets/weather-dashboard.png';
import noteTakerImage from '../assets/Note-Taker.png';
import mealMateImage from '../assets/meal-mate.png';
import blurbImage from '../assets/blurb.png';
import employeeTrackerImage from '../assets/employee-tracker.png';

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
                        <p>Create and collaborate on discussions about technology.</p>
                    </div>
                </div>
                <div className="project-buttons">
                    <a href="https://pure-escarpment-96333-a9295e0574cf.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn-live">Visit Site</a>
                    <a href="https://github.com/sethschnrt/tech-blog" target="_blank" rel="noopener noreferrer" className="btn-repo">GitHub Repo</a>
                </div>
                </div>
                <div className="project-wrapper">
                <div className="project">
                    <img src={weatherDashboardImage} alt="Weather Dashboard" className="project-image"/>
                    <div className="project-content">
                        <h3>Weather Dashboard</h3>
                        <p>View the current weather as well as a five-day forecast for any city.</p>
                    </div>
                </div>
                <div className="project-buttons">
                    <a href="https://sethschnrt.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" className="btn-live">Visit Site</a>
                    <a href="https://github.com/sethschnrt/weather-dashboard" target="_blank" rel="noopener noreferrer" className="btn-repo">GitHub Repo</a>
                </div>
                </div>
                <div className="project-wrapper">
                <div className="project">
                    <img src={noteTakerImage} alt="Note Taker" className="project-image"/>
                    <div className="project-content">
                        <h3>Note Taker</h3>
                        <p>Create notes and save them to local storage for later reference.</p>
                    </div>
                </div>
                <div className="project-buttons">
                    <a href="https://sleepy-cliffs-00624.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn-live">Visit Site</a>
                    <a href="https://github.com/sethschnrt/note-taker" target="_blank" rel="noopener noreferrer" className="btn-repo">GitHub Repo</a>
                </div>
                </div>
                <div className="project-wrapper">
                <div className="project">
                    <img src={mealMateImage} alt="Meal Mate" className="project-image"/>
                    <div className="project-content">
                        <h3>MealMate</h3>
                        <p>Search for an ingredient and receive meal suggestions, each paired with a recommended cocktail.</p>
                    </div>
                </div>
                <div className="project-buttons">
                    <a href="https://lcatsew.github.io/meal-mate/" target="_blank" rel="noopener noreferrer" className="btn-live">Visit Site</a>
                    <a href="https://github.com/LCatSew/meal-mate" target="_blank" rel="noopener noreferrer" className="btn-repo">GitHub Repo</a>
                </div>
                </div>
                <div className="project-wrapper">
                <div className="project">
                    <img src={blurbImage} alt="Blurb" className="project-image"/>
                    <div className="project-content">
                        <h3>Blurb</h3>
                        <p>Express your thoughts and emotions through posts that include GIFs.</p>
                    </div>
                </div>
                <div className="project-buttons">
                    <a href="https://blurb-44f4260f090e.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn-live">Visit Site</a>
                    <a href="https://github.com/sethschnrt/blurb" target="_blank" rel="noopener noreferrer" className="btn-repo">GitHub Repo</a>
                </div>
                </div>
                <div className="project-wrapper">
                <div className="project">
                    <img src={employeeTrackerImage} alt="Employee Tracker" className="project-image"/>
                    <div className="project-content">
                        <h3>Employee Tracker</h3>
                        <p>Command line tool to manage a database of company departments, roles, and employees.</p>
                    </div>
                </div>
                <div className="project-buttons">
                    <a href="https://github.com/sethschnrt/employee-tracker" target="_blank" rel="noopener noreferrer" className="btn-repo">GitHub Repo</a>
                </div>
                </div>
           </div>
        </section>
    );
}

export default Portfolio;