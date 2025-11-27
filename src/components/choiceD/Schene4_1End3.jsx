// import escrn from '../../assets/4_1e3.png';
import kpa4e3 from '../../assets/4_1e3.png';

import '../choiceA/s1.css'
import '../choiceB/S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

export default function Schene4_1End3() {
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
      transition: {
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity
      }
    }
  }

  const paragraphs = [
  "'I request an emergency board meeting,' David says, his voice steady. 'The liability exposure could bankrupt us.'",
  
  "The boardroom is all polished wood and cold calculation. Eight faces, mostly finance backgrounds, study David like a spreadsheet.",
  
  "He presents Aguirre's framework: 'Compute caps would cost us 15% performance but eliminate existential risk. Tool AI decomposition would—'",
  
  "The lead investor cuts him off. 'David, we have a $500 billion market cap to protect. Our competitors are launching next week. You're asking us to unilaterally disarm.'",
  
  "Another board member leans forward. 'The market has priced in full autonomy. If we delay, our stock drops 40% overnight. That's actual, measurable damage versus your... theoretical risks.'",
  
  "Richard summarizes the consensus: 'We'll implement enhanced monitoring and a 90-day review. But we launch on schedule. The market won't wait for perfect safety.'",
  
  "David is 'promoted' to Chief Research Officer—a symbolic title with no authority over deployment. Jonas Reed takes operational control of Helix.",
  
  "He watches from his new corner office as the catastrophe unfolds exactly as predicted. He has the title, the salary, and zero power to change anything.",
  
  "The board got what they wanted: plausible deniability and continued revenue. David got a better business card and a front-row seat to the end of human relevance.",
  
  "[You played their game and lost. Try Again?]"
];;



  return (
    <>
      <div className="sceneholder">
        <div className="backbutton" onClick={() => navigate(-1)}>
          <ChevronLeftIcon size={30} />
        </div>

        <div className="imageschene1">
          <img
            className="tops1_3A"
            src={kpa4e3}
            alt="bc scene"
          />

          <div 
            className="textschene1_3A"
            // ref={textContainerRef}
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
              <button onClick={() => navigate(-1)}>Try Again</button>
            </motion.div>
          </div>
        </div>

        <div className="imageschene2_1">
          <motion.img
            className="ewimage"
            src={kpa4e3}
            alt="office scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}