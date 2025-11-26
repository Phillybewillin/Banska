
import escrn from '../../assets/ENDINGGOLDEN.png';
import kpa from '../../assets/ENDINGGOLDEN.png';

import '../choiceA/s1.css'
import './S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

export default function Schene2_2End2() {
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

 const paragraphs = [
  "OpenData discloses the incident and works with regulators to establish the AI Safety Framework. Progress slows as compliance requirements multiply.",
  
  "The framework becomes global standard. Compute limits, mandatory audit trails, and cross-domain safety checks prevent similar near-misses across the industry.",
  
  "Med-Helix, now under strict oversight, helps eradicate three forms of cancer with zero adverse effects. The tool AI proves its worth under proper governance.",
  
  "OpenData becomes the gold standard for responsible AI development. Smaller, reckless competitors are regulated out of existence.",
  
  "The future progresses safely, if slowly. Humanity reaps AI's benefits without catastrophic risks—exactly the future Aguirre envisioned.",
  
  "..........................................................................",

  "The Golden Ending.",
  " (✿◡‿◡) ",


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
             <button onClick={()=>navigate('/')}>Play Again</button>

             {/* <button onClick={()=>navigate('/play/1/B/End2')}>Release with behavioral nerfs and monitoring</button> */}
            </motion.div>
          </div>
        </div>

        <div className="imageschene2_1">
         
            <motion.img
            className="ewimage"
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
