import  { useState,useEffect } from 'react'
import femaleai from '../assets/images/aibot2.png'
import maleai from '../assets/images/aibot.png'
import clickme from '../assets/images/clickme.png'
const cards= [
  { id: 1, front: "Struggling to identify and reach your target audience effectively?", backHeading: "Target Audience Identification & Reach",backSubheading:"Social Media Handling, SEO, and Google Ads"},
  { id: 2, front: "Difficulty in generating leads and converting them into loyal customers?", backHeading: "Lead Generation & Conversion",backSubheading:"Content Production, PR, and Branding"},
  { id: 3, front: "Lacking brand awareness or struggling to build trust in a competitive market?", backHeading: "Building Brand Awareness & Trust",backSubheading:"Influencer Marketing, PR, and Branding"},
  { id: 4, front: "Finding it hard to stand out from competitors and capture attention? ", backHeading: "Standing Out in a Crowded Market",backSubheading:"Website Development, Graphics, and Animation Videos"},
  { id: 5, front: "Managing customer relationships and keeping up with their changing expectations?", backHeading: "Customer Relationship Management",backSubheading:"Strategy and Google My Business"},
  { id: 6, front: "Dealing with operational inefficiencies that slow down growth?", backHeading: "Optimizing Operational Efficiency",backSubheading:"Automation and Strategy"},
  { id: 7, front: "Struggling to adapt to fast-changing market trends and technology?", backHeading: "Adapting to Market Trends",backSubheading:"Analytics, PR, and Branding"},
  { id: 8, front: "Facing challenges in scaling your business and managing increased demand?", backHeading: "Scaling Your Business",backSubheading:"Content Production, Website Development, and Strategy"},
  
]
export default function Solutions() {
  const [isFlipped, setIsFlipped] = useState(false)

  
  // const handleFlip = (flip) => {
  //   setIsFlipped(flip)
  // }
  const [flippedCards, setFlippedCards] = useState([]);

  const handleFlip = (flip) => {
    setIsFlipped(flip)
    if (flip) {
      const delays = cards.map((_, index) => index * 100); // 200ms delay between each card
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setFlippedCards(prev => [...prev, cards[index].id]);
        }, delay);
      });
    } else {
      setFlippedCards([]);
    }
  };

  useEffect(() => {
    return () => {
      // Clean up any ongoing timeouts when component unmounts
      setFlippedCards([]);
    };
  }, []);

  return (
    <>
    <div className='hidden lg:block h-screen w-screen'>

    </div>
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className='pb-6 text-6xl font-bold animate-fadeInUp mb-4'>{isFlipped?'Solutions':'Challenges'}</div>
      

      <div className="flex justify-center space-x-4 mb-4 md:hidden">
        <button
          className='w-24 h-24'
          onClick={() => handleFlip(false)}
          
        >
          <img src={maleai} className='w-full h-full' alt="" />
        </button>
        <button
          className='w-24 h-24'
          
          onClick={() => handleFlip(true)}
          
        >
          <img src={femaleai} className='w-full h-full' alt="" />
          
        </button>
      </div>
      <div className="flex w-full flex-col md:flex-row items-center justify-center md:items-stretch space-y-4 md:space-y-0 md:space-x-4">
        <button
         
          className="relative hidden md:inline-flex md:items-center w-36 md:w-48"
          onClick={() => handleFlip(false)}
         
        >
          <img src={maleai} alt="" className='w-36 md:w-48' />
          <img src={clickme} alt="" className='absolute h-16 w-16 top-1/2 left-1/2 animate-pulse'/>
          
        </button>
        <div className="flex flex-wrap items-center justify-center w-3/4">

        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-64 h-64 m-2 [perspective:1000px] group"
          >
            <div
              className={`absolute w-full h-full transition-all duration-500 [transform-style:preserve-3d] 
               ${flippedCards.includes(card.id) ? '[transform:rotateY(180deg)]' : ''}`}
            >
              <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-4 [backface-visibility:hidden]">
                <h2 className='text-lg py-6 text-center'>{card.front}</h2>
                
              </div>
              <div className="absolute w-full h-full bg-blue-500 text-white rounded-xl shadow-lg flex flex-col justify-between p-4 py-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h2 className='text-2xl font-bold text-right'>{card.backHeading}</h2>
                <p className='text-right pl-4'>{card.backSubheading}</p>
              </div>
            </div>
          </div>
        ))}
        </div>

        <button
          
          className="hidden md:inline-flex md:items-center w-36 md:w-48"
          onClick={() => handleFlip(true)}
           
        >
          <img src={femaleai} alt="" className='w-36 md:w-48'/>

        </button>
      </div>
    </div>
    </>

  )
}