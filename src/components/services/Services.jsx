import React from 'react'
import './services.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5 className="text-light">
        What I can do
      </h5>
      <h2 className="text-light">
        Skills
      </h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Technical Skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                HTML/CSS
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Javascript
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Python
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Django
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Redux
              </p>
            </li>
            
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
               SQL
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Typescript
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                C, C++, C#
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Communication
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Problem Solving
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Collaboration
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Adapatability
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
              Time Management
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Cybersecurity Tools</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Wireshark
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                TCPdump
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Splunk
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Chronicle
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                NMAP
              </p>
            </li>
           
          
          </ul>
        </article>
      </div>
      <div>
      {/* <a href="https://cloudez.io/br?utm_campaign=partner-atavares-seoxperts-badge&autm_medium=badge&utm_source=partner&utm_content=partner&utm_term=">
        <img alt="" width="220" height="60" src="https://files.cloudez.io/stamp/partner-sm.svg">
      </a> */}
      </div>
    </section>
  )
}

export default Services