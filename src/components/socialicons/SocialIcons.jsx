import React from 'react'
// import './socialicons.css'

import {BsLinkedin} from 'react-icons/bs'

import {BsGithub} from 'react-icons/bs'


const SocialIcons = (props) => {
    return (
        <div className={props.position}>
            <a href="https://www.linkedin.com/in/andrei-sabin-973b81246/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://github.com/Sabin789" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
        </div>
  )
}

export default SocialIcons
