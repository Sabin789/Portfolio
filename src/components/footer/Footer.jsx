import React from 'react'
import './footer.css'
import SocialIcons from '../socialicons/SocialIcons'

const Footer = () => {
  return (
    <footer>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
        <SocialIcons position='footer__socialicons' />
     
    </footer>
  )
}

export default Footer