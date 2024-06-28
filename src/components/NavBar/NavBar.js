import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
      window.scroll(0,0);
    };
    
  }, [isOpen]);

  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="neon-button"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="neon-button"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="neon-button"
          >
            Experience
          </Link>
        </li>
        
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggleMenu}
            className="neon-button"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
