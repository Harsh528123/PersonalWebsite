import {React,useState} from 'react'
import './Nav.css'
import {FaBars} from 'react-icons/fa'

const Nav = () => {
  const [showLinks, setShowLinks]= useState(false)

  return (

    <header>
         <nav className="navigation">
              <a href="/" className="brand-name">
                Harsh Kothari
              </a>  
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