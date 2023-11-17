import React from 'react'
import {BsAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {TiFolderAdd} from 'react-icons/ti'
import './about.css'
import ME from "../../assets/me_about.png"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me__image'>
            <img src={ME} alt="" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <BsAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Months Working  </small>
            </article>

            <article className='about__card'>
            <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>3+ Months Working  </small>
            </article>

            <article className='about__card'>
            <TiFolderAdd className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed  </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio sed delectus quaerat sequi suscipit, similique aliquid expedita eaque perspiciatis eos.
          </p>

          {/* <a href="#contact" className='btn btn__primary'></a> */}
        </div>
      </div>
    </section> 
  )
}

export default About