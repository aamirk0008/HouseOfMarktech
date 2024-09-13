// import React from 'react'

// export default function Footer() {
//   const handleSubmit = () => {
    
//     // Here you would typically handle the newsletter subscription
//     console.log("Newsletter subscription submitted")
//   }

//   return (
//     <footer className="bg-white text-black py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div>
//           <h3 className="font-semibold mb-2">Suite 2</h3>
//           <p>9 Marsh Street</p>
//           <p>Bristol, BS1 4AA</p>
//           <p>United Kingdom</p>
//         </div>
        
//         <div>
//           <h3 className="font-semibold mb-2">Social</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="flex items-center"> Twitter / X</a></li>
//             <li><a href="#" className="flex items-center"> Instagram</a></li>
//             <li><a href="#" className="flex items-center"> Linkedin</a></li>
//           </ul>
          
//           <h3 className="font-semibold mt-6 mb-2">General enquiries</h3>
//           <p>hello@lusion.co</p>
          
//           <h3 className="font-semibold mt-6 mb-2">Whatsapp</h3>
//           <p>90XXXXXX78</p>
//         </div>
        
//         <div>
//           <h2 className="text-4xl font-semibold mb-6">Subscribe to our newsletter</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="relative">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 required
//                 className="w-full pr-12 bg-gray-100 border-none outline-none pt-5 pb-5 pl-5 text-xl rounded-xl  "
//               />
//               <button type="submit" variant="ghost" className="absolute right-0 top-0 bottom-0 pr-5">
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
      
//       <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
//         <p>©2024 LUSION Creative Studio</p>
//         <p className="mt-4 sm:mt-0"><a href="https://labs.lusion.co" className="hover:underline">R&D: HOM</a></p>
//         <p className="mt-4 sm:mt-0 flex items-center">
//           Built by XX with <span className="text-red-500 ml-1">❤</span>
//         </p>
//       </div>
//     </footer>
//   )
// }



import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showNextPage, setShowNextPage] = useState(false)
  const router = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100

      setScrollProgress(scrollPercentage)
      setShowNextPage(scrollPercentage > 95)

      if (scrollPercentage >= 100) {
        document.body.style.transform = 'translateY(-100vh)'
        document.body.style.transition = 'transform 0.5s ease-in-out'
        setTimeout(() => {
          router('/about')
        }, 1000)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [router])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the newsletter subscription
    console.log("Newsletter subscription submitted")
  }

  return (
    <>
      <footer className="bg-white text-black py-16 px-4 sm:px-6 lg:px-8 mb-48">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Suite 2</h3>
            <p>9 Marsh Street</p>
            <p>Bristol, BS1 4AA</p>
            <p>United Kingdom</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Social</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="flex items-center"> Twitter / X</Link></li>
              <li><Link href="#" className="flex items-center"> Instagram</Link></li>
              <li><Link href="#" className="flex items-center"> Linkedin</Link></li>
            </ul>
            
            <h3 className="font-semibold mt-6 mb-2">General enquiries</h3>
            <p>hello@lusion.co</p>
            
            <h3 className="font-semibold mt-6 mb-2">Whatsapp</h3>
            <p>90XXXXXX78</p>
          </div>
          
          <div>
            <h2 className="text-4xl font-semibold mb-6">Subscribe to our newsletter</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full pr-12 bg-gray-100 border-none outline-none pt-5 pb-5 pl-5 text-xl rounded-xl"
                />
                <button type="submit" className="absolute right-0 top-0 bottom-0 pr-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>©2024 LUSION Creative Studio</p>
          <p className="mt-4 sm:mt-0"><Link href="https://labs.lusion.co" className="hover:underline">R&D: HOM</Link></p>
          <p className="mt-4 sm:mt-0 flex items-center">
            Built by XX with <span className="text-red-500 ml-1">❤</span>
          </p>
        </div>
      </footer>
      {showNextPage && (
        <div className="fixed bottom-0 left-0 right-0 py-8 px-16 flex justify-between items-center shadow-lg bg-black animate-fadeInUp duration-200">
          <span className="text-5xl  text-white">About<span className='text-xl animate-pulse duration-200 text-cyan-200 ml-8'>Next Page</span> </span>
          <div className="w-36 h-2 bg-gray-200 rounded-full overflow-hidden ">
            <div 
              className="h-full bg-blue-300 transition-all duration-300 ease-out"
              style={{ width: `${(scrollProgress-95)*20}%` }}
            ></div>
          </div>
        </div>
      )}
    </>
  )
}