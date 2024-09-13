import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Camera3d from './Camera3d'
import WorkHero from './WorkHero'
import Footer from './Footer'
import Gallery from './Gallery'
import GoToTopButton from './Gototop'

const OurWork = () => {
  
  return (
    <>
      <Navbar mode='dark'/>
      <GoToTopButton/>
      <WorkHero/>
      <Gallery/>
      <Footer mode='dark' next='Solutions'/>
      {/* <Camera3d/> */}
    </>
  )
}

export default OurWork
