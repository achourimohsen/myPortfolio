import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port1.png'
import IMG2 from '../../assets/port2.png'
import IMG3 from '../../assets/port3.webp'
import IMG4 from '../../assets/port4.webp'
import IMG5 from '../../assets/port5.webp'
const data = [
  {
    id:1,
    image:IMG1,
    title: "Bubble",
    github: 'https://github.com/achourimohsen/bubble',
    demo: 'http://dribbble.com/shots/16673715-crypto-currency-dashboards-and-financial-data-vizualization'

  },
  {
    id:2,
    image:IMG2,
    title: "Car Moving",
    github: 'https://github.com/achourimohsen/car-moving',
    demo: 'http://dribbble.com/shots/16673715-crypto-currency-dashboards-and-financial-data-vizualization'

  },
  {
    id:3,
    image:IMG3,
    title: "crypto",
    github: 'http://hithub.com',
    demo: 'http://dribbble.com/shots/16673715-crypto-currency-dashboards-and-financial-data-vizualization'

  },
  {
    id:4,
    image:IMG4,
    title: "crypto",
    github: 'http://hithub.com',
    demo: 'http://dribbble.com/shots/16673715-crypto-currency-dashboards-and-financial-data-vizualization'

  },
  {
    id:5,
    image:IMG5,
    title: "crypto",
    github: 'http://hithub.com',
    demo: 'http://dribbble.com/shots/16673715-crypto-currency-dashboards-and-financial-data-vizualization'

  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='containe portfolio__container'>
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article  key= {id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blanck'>Github</a>
            <a href={demo} className='btn btn__primary' target='_blanck'>Live Demo</a>  
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