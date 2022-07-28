import {React,useState} from 'react'
import './Nav.css'
import {FaBars} from 'react-icons/fa'
import DarkModeToggle from "react-dark-mode-toggle"

const Nav = ( {theme, setTheme} ) => {
      const [showLinks, setShowLinks]= useState(false);
      const [isDarkMode, setIsDarkMode] = useState(()=> false);
      const handleTheme = () => {
          if (theme==='light') {
              setTheme('dark');
              localStorage.setItem("theme",'dark')
              setIsDarkMode(()=>true);
          } else {
              setTheme('light');
              localStorage.setItem("theme", 'light')
              setIsDarkMode(()=>false);
              }
  }
  return (

    <header>
         <nav className="navigation" >
              <a href="/" className="brand-name"> Harsh Kothari </a> 
              <DarkModeToggle className='ToggleButton' onChange={handleTheme} checked={isDarkMode} size={60} /> 
              <button onClick={ ()=> setShowLinks(!showLinks)}> <FaBars/> </button>
              <div className="navigation-menu" id={ showLinks ? "hidden" : ""}>
                <ul>
                  <li>
                  <a href="/about">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
    </nav>
    </header>
  )
}

export default Nav