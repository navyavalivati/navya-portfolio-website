import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import { Element } from "react-scroll";
import './App.css';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className={`app ${theme}`}>
        <NavBar />
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
