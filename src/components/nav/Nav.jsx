import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {SiAboutdotme} from 'react-icons/si'
import {IoIosRocket} from 'react-icons/io'
import {GrMail} from 'react-icons/gr'

const Nav = () => {
  return (
    <nav>
      <a href="#"><FaHome/></a>
      <a href="#about"><SiAboutdotme/></a>
      <a href="#projects"><IoIosRocket/></a>
      <a href="#contact"><GrMail/></a>
    </nav>
  )
}

export default Nav