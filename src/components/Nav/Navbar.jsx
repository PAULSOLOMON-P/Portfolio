import React from 'react'
import '../Nav/Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  return (  
    <header>
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar