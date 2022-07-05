import React from "react";
import './Work.css'
import WORKIMG1 from '../../assets/referralbeehome.JPG'
import WORKIMG2 from '../../assets/investfourmore.PNG'
import WORKIMG3 from '../../assets/residy.PNG'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const data = [
  {
    image: WORKIMG1,
    company: 'ReferralBee',
    job__title: 'Web Application Developer - Jun 2021 - Present',
    job__description: 'I utilized React.js and PHP to create and interconnect several real estate applications related to lead generation, lead nurturing, and lead distribution. Worked heavily independently as well as with a small team utilizing Figma, Miro, Twilio, and Bubble to create custom CRM software.',
    live__site:'https://referralbee.co/'
  },
  {
    image: WORKIMG2,
    company: 'InvestFourMore',
    job__title: 'Web Assistant - Jan 2021 - Apr 2022',
    job__description: 'I maintained and assisted with various websites and applications utilizing WordPress, HTML, and CSS to maximize SEO performance. Created statistical analysis of finances and data and collaborated with a team to improve online reach and sales. Collaborated with a team of five employees to improve and deploy various applications. For the live site, I was responsible for all course landing pages, the imbedded store page, redoing all background blog post SEO, and book listings.',
    live__site:'https://investfourmore.com/'
  },
  {
    image: WORKIMG3,
    company: 'Residy',
    job__title: 'Web Assistant - Jul 2020 - Jun 2021',
    job__description: 'I created and managed WordPress site and landing pages. Responsible for several ad accounts utilizing ManyChat, Facebook Ads, and Google Ads, to provide a 3.7 times ROI on real estate lead generation.',
    live__site: null
  }
]

const Work = () => {
  return (
    <section id='work'>

      <h2>Professional Experience</h2>

      <Swiper className='container work__container' pagination={true} modules={[Pagination]}>
        {
          data.map(({image,company,job__title,job__description,live__site}, index) => {
            if (live__site !== null) {
              return (
                <SwiperSlide key = {index} className='work__experience'>
                  <div className='work__img'>
                    <img src={image} alt='Work History Screenshot'/>
                  </div>
                  <h2 className='work__title'>{company}</h2>
                  <h3 className='job__title'>{job__title}</h3>
                  <small className='work__description'>{job__description}</small>
                  <a href={live__site} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </SwiperSlide>
              )
            }
            return (
              <SwiperSlide key = {index} className='work__experience'>
                <div className='work__img'>
                  <img src={image} alt='Work History Screenshot'/>
                </div>
                <h2 className='work__title'>{company}</h2>
                <h3 className='job__title'>{job__title}</h3>
                <small className='work__description'>{job__description}</small>
              </SwiperSlide>
            )
          }) 
        }
      </Swiper>
    </section>
  )
}

export default Work