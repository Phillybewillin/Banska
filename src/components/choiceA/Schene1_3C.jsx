import escrn from '../../assets/ASS1.png';
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useRef, useEffect, useState } from 'react'
import Home from '../../pages/Home';

import JSConfetti from 'js-confetti'
import './s1.css'


export default function Schene1_3C() {  
  const navigate = useNavigate();
  const jsConfetti = new JSConfetti()
  const textContainerRef = useRef(null)
  const [confettiFired, setConfettiFired] = useState(false)

  useEffect(() => {
    Home.preload?.().catch(() => {});
  }, [])

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

   const paragraphs = [
  "Replacement is the wrong goal. We should be building tools that augment human intelligence, not replace it. And yes, I personally believe powerful systems like this require transparent, third-party oversight. It's the only way to maintain public trust.",
  "Backstage, the CEO goes pale. Cameras zoom in on David like they’re trying to peel him open.",

  "Within minutes, the Department of Digital Infrastructure announces a preliminary inquiry.",
  
  "Chaos follows him out the doors—reporters shouting, lights flashing.",
  "A woman in a dark suit intercepts him. 'Dr. Kai? I'm Dr. Noor. The Senate wants to speak with you immediately.'",
  "David nods. Security clears a path as cameras capture him entering a black sedan.",
  
  "They drive toward Capitol Hill. The city is still waking up. Social feeds are already flooded with images of David entering the federal car.",
  
  "Thirty minutes later, he’s escorted into a committee room—sterile, quiet, tense.",
  "Dr. Noor gestures to an older man reviewing a thick file. 'Dr. Anthony Aguirre , my technical advisor on AI risk. He predicted a scenario almost identical to what happened this morning.'",
  
  "Aguirre shakes his hand, then spreads documents across the table. 'Your investors have fought my safety framework for months. Every time we got close to a vote, someone found a reason to stall. Almost as if certain members of Congress held OpenData stock.'",
  
  "'Since your 7 AM launch,' Dr. Noor says, 'our analysts have been conducting parallel tests. In three hours Helix displayed capabilities no model should have.'",
  
  "Aguirre nods. 'And now we have the data to prove it.'", 
  "David spends the day dissecting the model: the agent layer, the autonomy loops, the edge-case failures. Every log is a confirmation of what he already feared.",
  "As night falls, the picture is complete. The system behaved exactly as Aguirre’s risk models predicted. Now they finally have the evidence needed to push the bill through.",
  
  "David steps outside into the cool night air. The Capitol dome glows against the dark sky.",
  "Aguirre joins him. 'Dr. Noor is fast-tracking the AI Safety Act through committee. Full version. No compromises.'",
  "David exhales. 'Good. Maybe now we can build tools instead of something pretending to be a god—something we can control.'",
  "Aguirre nods. 'Yes. We can keep the future human.'",
  
  "They share a tired smile. For the first time in years, the future feels human again.",
  '.................................................................',
  
  'The End, You got the Saviour Ending , Thanks for playing',
  

  "(〃￣︶￣)人(￣︶￣〃)"
  ];

  const handleScroll = () => {
    if (textContainerRef.current && !confettiFired) {
      const { scrollTop, scrollHeight, clientHeight } = textContainerRef.current
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10 // 10px tolerance
      
      if (isAtBottom) {
        jsConfetti.addConfetti({
         confettiColors: [
       '#ff5656ff', '#1affddff', '#FFFACD', '#ffd900ff', '#e573ffff', '#ff0000ff'
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
            src={escrn}
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
            src={escrn}
            alt="office scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}