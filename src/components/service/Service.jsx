import React from 'react'
import service from './service.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className='container service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum dolor sit.</p>
            </li>

            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum dolor sit.</p>
            </li>

            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum dolor sit.</p>
            </li>

            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </article>
        {/* end of UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente.</p>
            </li>

            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente.</p>
            </li>

            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente.</p>
            </li>

            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </article>
        {/* END WEB DEVELOPMENT */}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum dolor sit.</p>
            </li>

            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum dolor sit.</p>
            </li>

            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum dolor sit.</p>
            </li>

            <li>
              <BiCheck  classNameservice__list-icon/>
              <p>Lorem ipsum dolor sit.</p>
            </li>
          </ul>
        </article>
        {/* Content Creation */}

      </div>
    </section>
  )
}

export default Service