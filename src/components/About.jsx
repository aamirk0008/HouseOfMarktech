import React, { useEffect } from 'react'
import Navbar from './Navbar'

const About = () => {
    useEffect(()=>{

        document.body.style.transform = 'translateY(0)'
    })
  return (
    <div>
        <Navbar/>
      About page.
    </div>
  )
}

export default About
