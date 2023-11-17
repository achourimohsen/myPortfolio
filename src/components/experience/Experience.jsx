import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
        <h3>Front-end Developement</h3>
        
        <div className='experience__content'>
        
        <article className='experience-details'>
          <BsFillPatchCheckFill className = "experience__details__icon" />
          <div>
            <h4>HTML</h4>
            <small className='text__light'>Experience</small>
          </div>
        </article>

        <article className='experience-details'>
          <BsFillPatchCheckFill className = "experience__details__icon" />
          <div>
            <h4>CSS</h4>
            <small className='text__light'>JavaScript</small>
          </div>
        </article>

        <article className='experience-details'>
          <BsFillPatchCheckFill className = "experience__details__icon" />
          <div>
            <h4>JavaScript</h4>
            <small className='text__light'>Experience</small>
          </div>
        </article>

        <article className='experience-details'>
          <BsFillPatchCheckFill className = "experience__details__icon" />
          <div>
            <h4>Bootstrap</h4>
            <small className='text__light'>Experience</small>
          </div>
        </article>

        <article className='experience-details'>
          <BsFillPatchCheckFill className = "experience__details__icon" />
          <div>
            <h4>Tailwind</h4>
            <small className='text__light'>Experience</small>
          </div>
        </article>

        <article className='experience-details'>
          <BsFillPatchCheckFill className = "experience__details__icon" />
          <div>
            <h4>React</h4>
            <small className='text__light'>Experience</small>
          </div>
        </article>
        </div>
        </div>

        {/* start backend */}
        <div className='experience__backend'>

        <h3>back-end Developement</h3>
        
        <div className='experience__content'>
        
        <article className='experience-details'>
          <BsFillPatchCheckFill className = "experience__details__icon" />
          <div>
            <h4>Node JS</h4>
            <small className='text__light'>Experience</small>
          </div>
        </article>

        <article className='experience-details'>
          <BsFillPatchCheckFill className = "experience__details__icon" />
          <div>
            <h4>Mongo DB</h4>
            <small className='text__light'>Intermidiate</small>
          </div>
        </article>

        <article className='experience-details'>
          <BsFillPatchCheckFill className = "experience__details__icon" />
          <div>
            <h4>Express JS</h4>
            <small className='text__light'>Experience</small>
          </div>
        </article>

        

        </div>

        </div>
      </div>
    </section>
  )
}

export default Experience