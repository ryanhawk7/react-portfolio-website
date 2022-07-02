import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/SeniorDesign.JPG'
import IMG2 from '../../assets/KeplerianElements.JPG'
import IMG3 from '../../assets/portfolio3.jpg'

const portfolio__data = [
  {
    id: 1,
    image: IMG1, 
    title: 'Senior Design Project',
    description: 'Our team website for our first place senior design project. I was responsible for leading the interdiciplinary team of engineers, creating and updating the team website detailing the progress of the project, all entrepreneurship objectives of the project, as well as assisting with electrical and programming related tasks.',
    github: 'https://github.com/ryanhawk7/Senior-Design-Skateboard-Website',
    demo: 'https://projects-web.engr.colostate.edu/ece-sr-design/AY21/skateboard/',
  },

  {
    id: 2,
    image: IMG2, 
    title: 'Keplerian Elements',
    description: 'Interactive 3D representations of the 6 Keplerian Elements to help visualize and learn orbital mechanics, combining the p5.js library with CSS/HTML.',
    github: 'https://github.com/ryanhawk7/Keplerian-Elements',
    demo: 'https://ryanhawk7.github.io/Keplerian-Elements/',
  },

  {
    id: 3,
    image: IMG3, 
    title: 'Portfolio',
    description: 'Personal portfolio website, utilizing react.js, three.js for the interactive background 3D animation, and emailjs for contact.',
    github:'https://github.com',
    demo: null,
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          portfolio__data.map(({id,image,title,description,github,demo}) => {
            if (demo !== null) {
              return (
                <article key = {id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <h4>{description}</h4>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                  </div>
                </article>
              ) 
            }
            return (             
              <article key = {id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{description}</h4>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
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