import React from 'react'
import Resume from '../../assets/Resume.pdf'

const CV = () => {
  return (
    <div className='cv'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn'>Contact</a>
    </div>
  )
}

export default CV