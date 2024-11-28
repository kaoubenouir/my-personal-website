import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about" id="About">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a passionate Data Scientist and Machine Learning Engineer with expertise 
              in developing innovative AI solutions. With a strong foundation in both theoretical 
              concepts and practical applications, I specialize in:
            </p>
            <ul className="skills-list">
              <li>Machine Learning & Deep Learning</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
              <li>Data Analysis & Visualization</li>
              <li>Big Data Processing</li>
            </ul>
            <p>
              My journey in data science combines technical expertise with a creative approach 
              to problem-solving. I'm constantly exploring new technologies and methodologies 
              to deliver impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;