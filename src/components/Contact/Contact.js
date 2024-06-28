import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h1 style={{ fontSize: '48px' }}>Contact Me</h1>
      <div style={{ marginTop: '20px' }}>
        <a href="/path-to-resume.pdf" download="Resume_Navya_Valivati.pdf">
          <button style={buttonStyle}>Download Resume</button>
        </a>
        <div style={{ marginTop: '20px' }}>
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <br />
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <br />
          <a href="/path-to-resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
      <div style={{ marginTop: '40px', fontStyle: 'italic', textAlign: 'center' }}>
        <p>&copy; 2024 NavyaValivati. All rights reserved.</p>
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#4CAF50', // Green
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer'
};

export default Contact;
