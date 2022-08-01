import './App.css';
import Nav from "./Nav";
import Smallintro from "./components/Intro";
import Timeline from './components/Timeline';
import TypingEffect from './components/TypingEffect';
import Skills from './components/Skills'
import {React, useState} from 'react'
import Carousel from './components/Carousel';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light' );
  return (
        <div className="App" data-theme={theme} >
        {/* <Nav handler={handleUpdate} /> */}    
            <Nav theme={theme} setTheme={setTheme} />
            <TypingEffect/>
            <Smallintro theme={theme} />
            <Skills/>
            <Timeline />
            <Carousel/>
        </div>
  );
}

export default App;
