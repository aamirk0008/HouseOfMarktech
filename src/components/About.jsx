import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Gallery from './Gallery'

const About = () => {
   
  return (
    <div>
        <Navbar/>
      About page.
      <Gallery/>
      <Footer mode='light' next='Our Work'/>
    </div>
  )
}

export default About
