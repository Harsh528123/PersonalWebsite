import './App.css';
import Nav from "./Nav";
import Smallintro from "./components/Intro"
import Timeline from './components/Timeline';


function App() {
  return (
    <div className="App">
        <Nav />
        <Smallintro />
      <Timeline />
    </div>
  );
}

export default App;
