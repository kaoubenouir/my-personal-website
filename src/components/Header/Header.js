import React from 'react';
import './Header.css';
import profileImage from '../../assets/images/image2.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Welcome to my Data World</div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div> 

      {/* Hero Section */}
      <div className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Kaouther</h1>
            <h2>Data Scientist & ML Engineer</h2>
            <p>I build innovative AI solutions and bring ideas to life through code.</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn">View My Projects</a>
              <a href="#contact" className="btn secondary-btn">Get in Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Profile of Kaouther" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;