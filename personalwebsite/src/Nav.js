import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
    <header>
         <nav className="navigation">
              <a href="/" className="brand-name">
                Harsh Kothari
              </a>  
              <div className="navigation-menu">
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