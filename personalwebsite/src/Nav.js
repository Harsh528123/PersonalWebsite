import {React,useState, useEffect} from 'react'
import './Nav.css'
import { AiOutlineMenu } from 'react-icons/ai'
import {TiDelete} from 'react-icons/ti'
import DarkModeToggle from "react-dark-mode-toggle"

const Nav = ( {theme, setTheme, sethiddenMenu,hiddenMenu} ) => {
      const [showLinks, setShowLinks]= useState(false);
      const [isDarkMode, setIsDarkMode] = useState(false);
      const handleTheme = () => {
          if (theme==='light') {
              setTheme('dark');
              localStorage.setItem("theme",'dark')
              setIsDarkMode(true);
          } else {
              setTheme('light');
              localStorage.setItem("theme", 'light')
              setIsDarkMode(false);
              }

        }
  useEffect(()=> {
    if (isDarkMode && theme==='light'){
      setIsDarkMode(false);
    } else if (theme==='dark' && !isDarkMode) {
      setIsDarkMode(true);
    }
  },[] )

  const handleHiddenLinks = () => {
    setShowLinks(!showLinks);
    sethiddenMenu(false);
  }
  return (
    <header>
         <nav className="navigation" >
              <a href="/" className="brand-name"> Harsh Kothari </a> 
              <DarkModeToggle className='ToggleButton' onChange={handleTheme} checked={isDarkMode} size={60} /> 
              <button onClick={ ()=> 
                {
                  setShowLinks(!showLinks)
                  sethiddenMenu(!hiddenMenu)
                }}> <AiOutlineMenu/> </button>
              <div className="navigation-menu" id={ showLinks ? "hidden" : ""}>
                <ul>
                  <li>
                  <a onClick={handleHiddenLinks} href="#Home">Home</a>
                  </li>
                  <li>
                    <a onClick={handleHiddenLinks} href="#Experience">Experience</a>
                  </li>
                  <li>
                    <a onClick={handleHiddenLinks} href="#Contact">Contact</a>
                  </li>
                </ul>
                <button style={{border:'none', justifySelf:'flex-end', height:'10%', width:'10%', marginRight:'0' }}
                onClick={ ()=> 
                  {
                    setShowLinks(false);
                    sethiddenMenu(false);
                  }}
                > <TiDelete size={"40"}/> </button>
              </div>
    </nav>
    </header>
  )
}

export default Nav