import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects-content">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Description of project 1 and its impact.</p>
            <div className="project-tech">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>Deep Learning</span>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default Projects;