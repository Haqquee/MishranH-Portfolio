import React from 'react'
import './header.css'
import CV from './CV.jsx'
import Headshot from '../../assets/Headshot.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h1>Mishran Haque</h1>
      <h2>Aerospace Engineering Graduate</h2>
      <p>Since beginning my journey in this field, my dedication to the work and motivation to grow have led me to exceptional projects and experiences. I’m grateful for a profession I’m passionate about, and am proud to share examples of my greatest work. Take a moment to check out my portfolio, and get in touch with any questions.</p>
      <CV/>
      <div className="headshot">
        <img src={Headshot} alt="Headshot" />
      </div>
      </div>
    </header>
  )
}

export default Header