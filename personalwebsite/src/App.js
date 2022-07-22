import './App.css';
import Nav from "./Nav";
import Smallintro from "./components/Intro";
import Timeline from './components/Timeline';
import TypingEffect from './components/TypingEffect';


function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <TypingEffect/>
        <Smallintro />
      </div>
      <Timeline />
    </div>
  );
}

export default App;
