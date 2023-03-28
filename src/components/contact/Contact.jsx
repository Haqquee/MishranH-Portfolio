import React from 'react'
import './contact.css'
import {GrMail} from 'react-icons/gr'
import {AiFillLinkedin} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact' className='contact__section'>
      <h1>Contact</h1>
      <h2>Get in touch!</h2>
      <div className="contact__container">
        <a href="#contact" className='contact__info'>mishran.haque@gmail.com <GrMail /></a>
        <a href="https://www.linkedin.com/in/mishran-haque/" className='contact__info'>Linkedin <AiFillLinkedin/></a>
      </div>
    </section>
  )
}

export default Contact
