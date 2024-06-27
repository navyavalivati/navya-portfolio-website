import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { Element } from "react-scroll";
import './App.css';

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Element name="home">
          <Home />
        </Element>
      </div>
    </>
  );
}

export default App;
