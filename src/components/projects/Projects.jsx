import React from 'react'
import './projects.css'
import Canadarm from '../../assets/Canadarm.jpg'
import RPG from '../../assets/RPG.png'
import RRC from '../../assets/RRC.png'
import ACU from '../../assets/ACU.jpeg'
import ForestFire from '../../assets/ForestFire.jpg'

const Projects = () => {
  return (
    <section id='projects'>
      <h1>Experiences and Projects</h1>
      <div className="container container__projects">
        <article>
          <a href="#">
          <div className='project__image'>
            <img src={Canadarm} alt="Canadarm2"/>
          </div>
          <div className='project__desc'>
            <h3>Internship at Canadian Space Agency</h3>
            <p>I got the amazing opportunity to join the Canadian Space Agency in January of 2022. I held multiple internship positions throughout my 12 months at the Agency which includes project management positions for three different space projects as well as a mechanical engineering position.</p>
          </div>
          </a>
        </article>
        <article>
          <a href="#">
          <div className='project__image'>
            <img src={RPG} alt="Ryerson Propulsion Group"/>
          </div>
          <div className='project__desc'>
            <h3>Design Specialist at Ryerson Propulsion Group</h3>
            <p>In June of 2021, I got the opportunity to join RPG as a Design Specialist. Ryerson Propulsion Group (RPG) is a non-profit design team at Ryerson University. The main goal of the team is to research and develop liquid-propellant rocket engines. My main task on the team involved developing CFD simulations for the rocket engine as a part of the Combustion Dynamics Sub-team. </p>
          </div>
          </a>
        </article>
        <article>
          <a href="#">
          <div className='project__image'>
            <img src={RRC} alt="Ryerson Rocketry Club"/>
          </div>
          <div className='project__desc'>
            <h3>Avionics Subteam Member at Ryerson Rocketry Club</h3>
            <p>During the Fall of 2019, at the start of my second year of university, I joined RRC's Avionics Sub-team. RRC is a non-profit, student-run design team, dedicated to developing supersonic rockets, and is one of the 150+ University Rocket teams that compete in the annual Spaceport America Cup in New Mexico. </p>
          </div>
          </a>
        </article>
        <article>
          <a href="#">
          <div className='project__image'>
            <img src={ACU} alt="Aerospace Course Union"/>
          </div>
          <div className='project__desc'>
            <h3>Vice President Education at Aerospace Course Union</h3>
            <p>During the academic year of 2020-2021, I was a part of the Aerospace Course Union at Ryerson University. This is a student group devoted to serving the Aerospace Engineering students of the university. As a group, ACU hosts various social and academic events throughout the year, as well as promotes Aerospace Engineering at Ryerson.</p>
          </div>
          </a>
        </article>
        <article>
          <a href="#">
          <div className='project__image'>
            <img src={ForestFire} alt="Forest Fire"/>
          </div>
          <div className='project__desc'>
            <h3>Forest Fire Detection Drone Payload</h3>
            <p>In my fourth year of studies at University, my term project for Systems Engineering course was to design a payload for a drone. My team and I designed and programmed a payload that could be used to detect wildfires. The payload hardware consisted of an Arduino kit along with smoke detection and temperature sensors, which were programmed in C++.</p>
          </div>
          </a>
        </article>
      </div>
    </section>
    
  )
}

export default Projects
