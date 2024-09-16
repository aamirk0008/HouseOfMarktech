import Navbar from './Navbar'
import GoToTopButton from './Gototop'
import HeroSection from './HeroSection'
import CTA from './CTA'
import Solutions from './Solutions'
import Testimonials from './Testimonials'
import Companies from './Companies'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <GoToTopButton/>
      <HeroSection/>
      <CTA/>
      <Solutions/>
      <Testimonials/>
      <Companies/>
      <Footer mode='light' next='About'/>
    </>
  )
}

export default Home
