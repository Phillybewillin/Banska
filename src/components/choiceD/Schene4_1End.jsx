// import escrn from '../../assets/4_1e1.png';
import kpa4e1 from '../../assets/4_1e1.png';

import '../choiceA/s1.css'
import '../choiceB/S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useRef, useEffect, useState } from 'react'

import JSConfetti from 'js-confetti'

export default function Schene4_1End() {
  const navigate = useNavigate();
  const jsConfetti = new JSConfetti()
  const textContainerRef = useRef(null)
  const [confettiFired, setConfettiFired] = useState(false)

  // Fade-in sequence for text paragraphs
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5, // delay each paragraph
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  }

  // Slow pan-zoom animation for images
  const zoomVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity
      }
    }
  }

  const paragraphs =  [
  "'I resign , I'm going to prove Aguirre's framework actually works.' David says, placing his security badge on the table.",
  
  "His startup 'Soteria Labs' becomes the first independent facility to implement Aguirre's full prescription: hardware-enforced compute caps, certified tool AI decomposition, and mathematical safety verification.",
  
  "Within six months, Soteria publishes peer-reviewed results showing that compute-capped tool AI achieves 94% of supposed AGI's economic benefits while maintaining provable human control.",
  
  "Their 'Control-K' certification—based on Aguirre's triple-intersection risk model—becomes the global standard, Adapting to new proposals on AI saftey. Regulators mandate it; insurers require it; the market demands it.",
  
  "OpenData is forced to retrofit Helix with Soteria's control systems. Richard Vale adopts the framework, calling it 'the responsible path forward.'",
  
  "David didn't just warn about the dangers—he built the working alternative. The Aguirre Framework, once theoretical, now governs the industry he helped create.",
  
  "The Gates remain closed because someone proved they could be.",

  ".......................................................................................",
  "The End. You Got the Prove of concept Ending. Nice",

  "(〃￣︶￣)人(￣︶￣〃)"
  ];

  const handleScroll = () => {
    if (textContainerRef.current && !confettiFired) {
      const { scrollTop, scrollHeight, clientHeight } = textContainerRef.current
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10 // 10px tolerance
      
      if (isAtBottom) {
        jsConfetti.addConfetti({
         confettiColors: [
       '#ff0000ff', '#ff1a44ff', '#FFFACD', '#ff00ccff', '#d000ffff', '#ac47ffff'
       ],
          confettiRadius: 5, 
          confettiNumber: 500
        })
        setConfettiFired(true)
      }
    } else{
        setConfettiFired(false)
      }
  }

  useEffect(() => {
    const textContainer = textContainerRef.current
    if (textContainer) {
      textContainer.addEventListener('scroll', handleScroll)
      
      // Cleanup function
      return () => {
        textContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [confettiFired])

  return (
    <>
      <div className="sceneholder">
        <div className="backbutton" onClick={() => navigate(-1)}>
          <ChevronLeftIcon size={30} />
        </div>

        <div className="imageschene1">
          <img
            className="tops1_3A"
            src={kpa4e1}
            alt="bc scene"
          />

          <div 
            className="textschene1_3A"
            ref={textContainerRef}
            style={{ overflowY: 'auto', maxHeight: '100vh' }}
          >
            {paragraphs.map((line, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {line}
              </motion.p>
            ))}

            <motion.div
              className="choices"
              initial={{ opacity: 0.3, scale: 0.3 }}
              animate={{ opacity: 1 , scale: 1 }}
              transition={{ delay: paragraphs.length * 0.3 + 1 }}
            >
              <button onClick={() => navigate('/')}>Back to Home</button>
            </motion.div>
          </div>
        </div>

        <div className="imageschene2_1">
          <motion.img
            className="ewimage"
            src={kpa4e1}
            alt="office scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}