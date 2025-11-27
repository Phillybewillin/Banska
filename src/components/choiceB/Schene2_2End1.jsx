
// import escrn from '../../assets/END3_3.png';
import kpaCo from '../../assets/END3_3.png';

import '../choiceA/s1.css'
import './S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

export default function Schene2_2End1() {
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
  "OpenData implements strict internal compute limits and additional safety layers. The stock recovers as investors praise 'responsible innovation.'",
  
  "For two years, the company flourishes. Med-Helix helps develop treatments for Alzheimer's, diabetes, and rare genetic disorders. Revenue hits record highs.",
  
  "Then a whistleblower leaks the original cancer trial incident to the FDA. Congressional hearings begin. 'Why wasn't this disclosed?' lawmakers demand.",
  
  "David testifies: 'We fixed the problem. We implemented 47 new safety protocols. The system caught its own error and helped create a safe treatment.'",
  
  "The government fines OpenData $3B for nondisclosure, but allows them to continue operations. The company emerges stronger, having proven tool AI's value while surviving regulatory scrutiny.",
  
  "The future remains profitable, but the sword of Damocles hangs over every breakthrough.",

  "..........................................................................",

  "The Coperate Ending. The End.",
  "＞﹏＜",


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
            src={kpaCo}
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
             <button onClick={()=>navigate('/play/1/B')}>TRY AGAIN</button>
             

             <button onClick={()=>navigate('/')}>Restart</button>
            </motion.div>
          </div>
        </div>

        <div className="imageschene2_1">
         
            <motion.img
            className="ewimage"
            src={kpaCo}
            alt="office scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}
