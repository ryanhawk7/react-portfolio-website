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
    job__title: 'Web Developer - Jun 2021 - Present',
    job__description: "I utilized React.js, HTML, CSS, and JavaScript to build the company's responsive front-end website. I also developed the back-end system using PHP, MySQL, and RESTful APIs to create and interconnect several real estate applications related to lead generation, lead nurturing, and lead distribution. I worked heavily independently as well as with front-end and UI/UX developers utilizing Figma, Miro, Twilio, and Bubble throughout the full-stack web development process as well as to create custom CRM software.",
    live__site:'https://referralbee.co/'
  },
  {
    image: WORKIMG2,
    company: 'InvestFourMore.com',
    job__title: 'Web Assistant - Jan 2021 - Apr 2022',
    job__description: 'I maintained and updated the company blog, web store, and education center utilizing WordPress, HTML, CSS, and Teachable to maximize SEO performance, increase responsiveness, and improve accessibility. I also created statistical analysis of finances and data and collaborated with a team to improve online reach and sales by updating email marketing and improving SEO.',
    live__site:'https://investfourmore.com/'
  },
  {
    image: WORKIMG3,
    company: 'Residy Real Estate Leads',
    job__title: 'Web Assistant - Jul 2020 - Jun 2021',
    job__description: 'I created and managed WordPress site and landing pages primarily utlilizing HTML and CSS. I was responsible for several ad accounts and for creating multiple ad creatives utilizing ManyChat, Facebook Ads, Google Ads, and A/B testing to provide a 3.7 times ROI on real estate lead generation.',
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