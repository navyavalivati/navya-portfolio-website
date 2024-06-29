import { Link } from "react-scroll";
import React, { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useSpring, animated } from "react-spring";
import {ThemeContext} from '../../App';
import "./Home.css";
import CIcon from '@coreui/icons-react';
import {cibLeetcode} from '@coreui/icons';
import myImage from './my_image.png';

const loadFontAwesome = () => {
  const link = document.createElement("link");
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const Home = () => {

  const resumeLink = () => {
    window.open('https://drive.google.com/file/d/1xlGyrnDDpHWLT2a-ZHbR6oNBctovAyLJ/view?usp=sharing', '_blank');
  };

  React.useEffect(() => {
    loadFontAwesome();
  }, []);

  const props = useSpring({
    from: { transform: "translateY(50px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 1000 },
  });

  const {theme} = useContext(ThemeContext);
  return (
    <div className="home">
      
      <div className="home-content">
        <div className="home-text">
          <animated.h1 style={props} className="name">
            Navya Valivati
          </animated.h1>
          <h2>
            <Typewriter
              words={[
                "Software Development Engineer",
                "Quality Assurance Engineer",
                "Software Development Engineer"
              ]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p>
          Welcome to my portfolio! I am Navya Valivati, a passionate software developer with a love for creating innovative solutions. 
          Dive into my journey and explore my skills, experiences, and projects. Get to know more about me and my work through this portfolio. 
          Enjoy your visit!
          </p>
          <div className="button-container">
            <Link to="about" smooth={true} duration={500} className={`more-button ${theme}`}>Who Am I?</Link>
            <button onClick={resumeLink} className={`resume-button ${theme}`}> Download Resume </button>
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
            <a href="https://leetcode.com/u/navyavalivati/" className="icon-link" target="_blank" rel="noopener noreferrer">
              <CIcon icon={cibLeetcode} size="sm" width={30}>
              </CIcon>
            </a>
          </div>
        </div>
        <div className="round-image-container">
          <div className="round-image-border"></div>
          <img src={myImage} alt="my_image" className="round_image"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
