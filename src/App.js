import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Element } from "react-scroll";
import './App.css';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
    const toggle = () => {
        setTheme((currTheme) =>  (currTheme === "light" ? "dark" : "light"));
    }
  return (
    <>
      <div>
        <NavBar />
      </div>
      
      <div>
      <ThemeContext.Provider value={{theme, toggle}}>
        <Element name="home" id={theme}>
          <Home />
          {/* <ReactSwitch onChange={toggle} checked={theme === "dark"}/> */}
        </Element>
        <Element name="about" id={theme}>
          <About />
        </Element>
      </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
