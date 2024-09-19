import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

import WorkHero from '../components/WorkHero'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import GoToTopButton from '../components/Gototop'

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
