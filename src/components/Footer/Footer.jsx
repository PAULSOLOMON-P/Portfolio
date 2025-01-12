import React from 'react'
import '../Footer/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-img'> <img src="../img/logo.png" /></div>
            <h1>Follow me</h1>
            <div className='footer-links'>
            <a href="https://www.linkedin.com/in/paul-solomon1/"><i class="fa-brands fa-linkedin"></i></a> 
            <a href="https://github.com/PAULSOLOMON-P"><i class="fa-brands fa-github"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a> 
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer