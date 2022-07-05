import React from 'react'
import './About.css'
import {MdSchool} from 'react-icons/md'
import {MdWorkOutline} from 'react-icons/md'
import {RiPencilRuler2Line} from 'react-icons/ri'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className='about__content'>

          <div className='about__cards'>

            <article className='about__card'>
              <MdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>BS in Electrical and Computer Engineering from Colorado State University</small>
            </article>

            <article className='about__card'>
              <MdWorkOutline className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years of Website and App Experience working as a Web Assistant and Application Developer</small>
            </article>

            <article className='about__card'>
              <RiPencilRuler2Line className='about__icon'/>
              <h5>Skills</h5>
              <small>React.js, p5.js, three.js, PHP, WordPress, Java, C/C++, Git, SEO, Figma</small>
            </article>

          </div>

          <p>
            I am a Colorado State University Graduate who completed my <strong>Bachelor's in Science</strong> for <strong>Electrical and Computer 
            Engineering</strong> in May 2022. I started website design after taking a personal interest years ago, and have continued my 
            development through schooling and work since. I have a strong interest in all things 3D as well, such as the p5.js and three.js 
            libraries, AutoCAD, and Blender.
          </p>

          <div className='about__btns'>
            <CTA/>
            <HeaderSocials/>
          </div>


        </div>

      </div>

    </section>
  )
}

export default About