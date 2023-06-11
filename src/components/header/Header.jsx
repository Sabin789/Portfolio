import React from 'react'

import './header.css'
import CTA from './CTA'
import ME from '../../assets/CV-PIC.jpg'
import SocialIcons from '../socialicons/SocialIcons'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text-light'>Hi, my name is</h5>
        <h1 className='text-light'>Sabin Andrei</h1>
        {" "}
        <h3 className="mono text-light">
         
        </h3>
        {/* <h4 className="text-light">
          Projetos de tecnologia, marketing e educação
        </h4> */}
        <CTA />
        <SocialIcons position='header__socialicons' />
        <div className="me">
          <img className='me-pic' src={ME} alt="André Tavares Fotografando" />
        </div>
        <a href="#contact" className='scroll__down'>
          Scroll
        </a>
      </div>
    </header>
  )
}