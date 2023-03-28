import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Maintenance from './components/maintenance/Maintenance'

const App = () => {
  return (
    <>
      <Header />
      <Maintenance/>
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>

  )
}

export default App