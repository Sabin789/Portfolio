import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/image1.png'
import IMG2 from '../../assets/image2.png'
import IMG3 from '../../assets/iamge3.png'


// Data Array para preenhcer o portfolio
const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'Event Finder',
    github: 'https://github.com/Sabin789/Event-Finder-FE',
    demo: 'https://beexclusivegym.com.br'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Linkedin clone with no registration system',
    github: 'https://github.com/Pietrek1989/LinkedIn_Build',
    demo: 'https://embelezegama.com.br'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Whatsapp clone',
    github: 'https://github.com/batigokovali/whatsapp-bw5-fe',
    demo: 'https://seoxperts.com.br'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='text-light'>Some of my work</h5>
      <h2 className="text-light">
        Portfolio
      </h2>
     
      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} className="image" alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
              </article>
            )
          })
        }

      </div>

    </section>
  )
}

export default Portfolio