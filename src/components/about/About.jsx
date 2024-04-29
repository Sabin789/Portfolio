import React from 'react'
import './about.css'


const About = () => {
  return (
    <section id='about'>
      <h5 className='text-light'>A few thing about me</h5>
      <h2 className='text-light'>Technologies experience and Education</h2>

        <div className="container about__container">
          <div className="about__content">
            <p>
          I am a 23 years old entry level data analyst. I have started coding
          doing the free online courses from freecodecamp and then enrolled in the 
          six month long bootcamp of Epidoce where I have been shown how to be a web developer 
          from scratch and got familiar with the basics and then the more advanced 
          aspects and fronend and backend of web development.I also got the Google Cybersecurity Certificate
          on 5th March.
            </p>
            <a href="#contact" className="btn btn-primary">Find out more</a>
          </div>
        </div>
    </section>
  )
}

export default About
