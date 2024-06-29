import React from 'react';
import './Contact.css';

const Contact = () => {
  const resumeLink = () => {
    window.open('https://drive.google.com/file/d/1xlGyrnDDpHWLT2a-ZHbR6oNBctovAyLJ/view?usp=sharing', '_blank');
  };
  return (
    <div className="contact-container">
      <h1 className="contact-title">Hire Me!</h1>
      <div className="contact-content">

      <div className="button-container">
            <button onClick={resumeLink} className="download-button"> Download Resume </button>
          </div>
        <div className="icon-container">
          <a href="mailto:valivati.navya@gmail.com" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/navya-valivati/" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/navyavalivati" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.hackerrank.com/profile/valevati_navya" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-hackerrank"></i>
          </a>
        </div>
      </div>
      <div className="citation">
        <p>&copy; 2024 Navya Valivati. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
