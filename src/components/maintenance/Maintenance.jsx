import React from 'react'
import './maintenance.css'
import {GoAlert} from 'react-icons/go'

const Maintenance = () => {
  return (
    <div className='maintenance__container'>
        <h2><GoAlert/>The website is currently in development, information may be incomplete and responsiveness may not work as intended.</h2>
    </div>
  )
}

export default Maintenance