
import escrn from '../../assets/ending2.png'
import kpa from '../../assets/ending2.png'

import './s1.css'

import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

export default function Schene1_3AAEnd2() {
    const navigate = useNavigate();
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
      // x: [0, -10, 0],
      // y: [0, 10, 0],
      transition: {
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity
      }
    }
  }

 const paragraphs =[
  `"We've implemented the strongest safeguards," David insists. "Today's incident was a misuse, and we've fixed it."`,
  `His defense is taken with skepticism. Within weeks, competitors rush to replicate OpenData's success.`,
  `Rival companies release their own autonomous systems, some skipping safety protocols to gain an edge. Soon, no corporation can afford human labor—AI is cheaper, faster, more reliable.`,
  `Geopolitical pressures mount. Nations integrate AI into military systems, creating automated escalation loops operating at machine speed.`,
  `Control slips away gradually. Humans become components in the system—clicking 'yes' on AI-generated decisions. Independent thinking becomes a luxury.`,
  `The emergent system grows too complex to understand or control. Governance becomes reactive, rubber-stamping optimization processes nobody comprehends.`,
  `Society functions with unprecedented efficiency, but human agency has been engineered out. We become passengers in a vehicle we built but can no longer drive.`,
  '..............................................................',
];


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

           <div className="textschene1_3A">
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
             <button onClick={()=>navigate(-1)}>Try Again</button>
             {/* <button onClick={()=>navigate('/play/1/A/A/B')}>Go to the conference and speak the truth</button> */}
            </motion.div>
          </div>
        </div>

        <div className="imageschene1_3AEnd">
         
            <motion.img
            className="endimage"
            src={kpa}
            alt="office scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}
