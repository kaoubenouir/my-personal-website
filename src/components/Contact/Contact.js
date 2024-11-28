import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <div className="contact-grid">
          <div className="contact-text">
            <p>
              I'm always interested in hearing about new projects, opportunities, 
              and collaborations in the field of Data Science and AI. Whether you 
              have a question or just want to say hi, feel free to reach out!
            </p>
            <ul className="contact-list">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </li>
              <li>
                <span className="contact-label">LinkedIn:</span>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourprofile
                </a>
              </li>
              <li>
                <span className="contact-label">GitHub:</span>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  github.com/yourprofile
                </a>
              </li>
              <li>
                <span className="contact-label">Location:</span>
                <span>Your City, Country</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;