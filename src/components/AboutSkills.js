import React from 'react';

function AboutSkills() {
    return (
        <div className="sections-container">
            <div className="about-me-section">
                <h2>About Me</h2>
                <div className="content-wrapper">
                <p> My name is Seth Schoenert and I'm from Portland, OR; but I currently reside in Austin, TX.
                I am a Fullstack Web Developer with a focus on the MERN tech stack. Im currently enrolled at 
                The University of Texas at Austin in the Software Development Bootcamp and earn my certification at the end of August 2023.

                </p>
                </div>
            </div>
            
            <div className="skills-section">
                <h2>My Skills</h2>
                <div className="content-wrapper">
                <div className="listFlex">
          <ul className="list">
            <li>
              <img
                alt="html svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
              <img
                alt="css svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              />
              <img
                alt="javascript svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                alt="bootstrap svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              />
              <img
                alt="vsCode svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
              />
            </li>
          </ul>
          <ul className="list">
            <li>
              <img
                alt="mongodb svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              />
              <img
                alt="express svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              />
              <img
                alt="react svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                alt="node svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
              <img
                alt="mysql svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              />
            </li>
          </ul>
          <ul className="list">
            <li>
              <img
                alt="jquery svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
              />
              <img
                alt="heroku svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
              />
              <img
                alt="git svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              />
              <img
                alt="npm svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              />
              <img
                alt="webpack svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg"
              />
              
            </li>
          </ul>
          </div>
        </div>
            </div>
        </div>
    );
}

export default AboutSkills;