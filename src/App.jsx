import React from 'react'
import Background from './components/background/Background'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Work from './components/work/Work'



const App = () => {
  return (
    <>
      <div className='background__animation'>

      </div>

      <div className='page__content'>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </div>

    </>
  )
}

export default App