
import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
// import Image from 'next/image'
import bg from '../assets/images/work-bg.jpg'
import Gallery from './Gallery'
export default function WorkHero() {
  const [imageLoaded, setImageLoaded] = useState(true)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -100])

//   useEffect(() => {
//     const img = new Image()
//     img.src = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9CojfS1oTYeEBwWOHV6yQZhivJUjO1.png'
//     img.onload = () => setImageLoaded(true)
//   }, [])

  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: useTransform(scrollYProgress, [0.5, 1], [0, 1]) }}
      /> */}
      <motion.div
        className="relative h-full"
        style={{ opacity, scale, y }}
      >
        
          <img
            src={bg}
            alt="Film set with camera and crew"
            layout="fill"
            objectFit="cover"
            className="brightness-75 rounded-b-3xl w-full h-full object-cover"
          />
        
        <div className="absolute inset-0 flex flex-col top-1/4 px-8 md:px-16 lg:px-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Lights.<br />Camera.<br />Cloud.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl">
            Camera to Cloud is the fastest, easiest, and most secure way to get media from the set to the people who need to work with it.
          </p>
          <button className="bg-white text-black py-2 px-6 rounded-full inline-flex items-center space-x-2 hover:bg-gray-200 transition duration-300 w-fit">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span>Watch the Video</span>
          </button>
        </div>
      </motion.div>

    </div>
  )
}