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
        Services
      </h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend</h3>
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
                React
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Vite
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
               Bootstrap
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
                C
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                C++
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                C#
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Javascript
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Node.js
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Express.js
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Restful APIs
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
                Socket.io
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                C
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                C++
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                C#
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Python
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Databases</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                MongoDB
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Mongoose
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                PostgresSQL
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Sequlize
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