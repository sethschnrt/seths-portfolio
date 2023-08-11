import React from "react";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="navbar-brand"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          SETH SCHOENERT
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
                  <Link
                    className="category"
                    to="aboutSkills"
                    offset={-59}
                    duration={500}
                  >
                    <div href="aboutSkills" className="nav-link active">
                      About Me
                    </div>
                  </Link>
                </li>
            <li className="nav-item">
                  <Link
                    className="category"
                    to="Portfolio"
                    offset={-59}
                    duration={500}
                  >
                    <div href="Portfolio" className="nav-link active">
                      Porfolio
                    </div>
                  </Link>
                </li>
            <li className="nav-item">
                  <Link
                    className="category"
                    to="Contact"
                    offset={-100}
                    duration={500}
                  >
                    <div href="Contact" className="nav-link active">
                      Contact
                    </div>
                  </Link>
                </li>
            <li className="nav-item">
              <a className="nav-link" href="/assets/resume1.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
