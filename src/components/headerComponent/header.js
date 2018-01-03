import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// includes
import profile from '../../assets/img/profile.jpg';
import downloadPDF from '../../assets/img/Michael Shin_Resume.pdf';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Michael Shin</span>
            <span className="d-none d-lg-block">
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="" />
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/experience">Experience</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/interests">Interests</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={downloadPDF} rel="nofollow">Download PDF Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;