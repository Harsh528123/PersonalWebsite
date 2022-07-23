import './App.css';
import Nav from "./Nav";
import Smallintro from "./components/Intro";
import Timeline from './components/Timeline';
import TypingEffect from './components/TypingEffect';
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
        <Nav />
        <TypingEffect/>
        <Smallintro />
        <Skills/>
        <Timeline />
    </div>
  );
}

export default App;
