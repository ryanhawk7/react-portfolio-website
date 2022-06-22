import React from 'react'
import './Experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {SiP5Dotjs} from 'react-icons/si'
import {SiThreedotjs} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {FaPhp} from 'react-icons/fa'
import {SiCplusplus} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'



const frontend = [
  { 
    title: 'HTML',
    icon: AiOutlineHtml5
  },
  { 
    title: 'CSS',
    icon: TbBrandCss3
  },
  { 
    title: 'JavaScript',
    icon: TbBrandJavascript
  },
  { 
    title: 'React.js',
    icon: FaReact
  },
  { 
    title: 'P5.js',
    icon: SiP5Dotjs
  },  
  { 
    title: 'Three.js',
    icon: SiThreedotjs
  }
]

const backend = [
  { 
    title: 'PHP',
    icon: FaPhp
  },
  { 
    title: 'Java',
    icon: FaJava
  },
  { 
    title: 'C/C++',
    icon: SiCplusplus
  },
  { 
    title: 'Python',
    icon: FaPython
  }
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>

        <div className='experience__frontend'>

          <h2>Front End Skills</h2>
          <div className="experience__content">

            { frontend.map(({title,icon}) => {
              const Icon = icon;

              return (
                <article className='experience__details'>
                  <Icon className='experience__details-icon'/>
                  <div>
                    <h3>{title}</h3>
                  </div>
                </article>
              ) 
            })
            }

          </div>

        </div>



        <div className='experience__backend'>

          <h2>Back End Skills</h2>
          <div className="experience__content">

            { backend.map(({title,icon}) => {
              const Icon = icon;
              return (
                <article className='experience__details'>
                  <Icon className='experience__details-icon'/>
                  <div>
                    <h3>{title}</h3>
                  </div>
                </article>
              ) 
            })
            }

          </div>

        </div>

      </div>

    </section>
  )
}

export default Experience