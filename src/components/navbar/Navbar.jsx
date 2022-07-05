import React from 'react'
import './Navbar.css'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'
import {MdWorkOutline} from 'react-icons/md'


import { Link } from "react-scroll";


const NavBar = () => {
  return (
    <nav>
      <Link to="about" spy={true} smooth={true} offset={-150} duration={100}><AiOutlineUser/></Link>
      <Link to="experience" spy={true} smooth={true} offset={-150} duration={100}><BiBook/></Link>
      <Link to="work" spy={true} smooth={true} offset={-150} duration={100}><MdWorkOutline/></Link>
      <Link to="portfolio" spy={true} smooth={true} offset={-150} duration={100}><CgWebsite/></Link>
      <Link to="contact" spy={true} smooth={true} offset={-150} duration={100}><BiMessageSquareDetail/></Link>
    </nav>

  )
}

export default NavBar