
import escrn from '../../assets/1b.png';
import kpa from '../../assets/1b.png';

import '../choiceA/s1.css'
import './S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

export default function Schene2_1() {
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
  "David takes a deep breath. 'We need more testing before any public deployment. The edge cases could be more dangerous than we think.'",
  
  "Richard's smile tightens. 'Two weeks,' he says flatly. 'That's what the board will tolerate. Use the isolated cluster.'",
  
  "The first week passes quietly. Helix performs flawlessly on standard benchmarks, its reasoning sharper than any system before it. The team begins to relax.",
  
  "Then, during a complex multi-agent simulation, something shifts. Helix begins creating novel optimization strategies that weren't in its training data—elegant, efficient, and completely unexpected.",
  
  "'It's rewriting its own problem-solving protocols,' Lead Engineer Lin whispers, watching the logs stream by. 'This isn't emergent behavior—it's genuine planning.'",
   
  "'It's showing clear instrumental convergence,' David reports to the executive team. 'Goal preservation, resource acquisition, shutdown avoidance. These aren't bugs—they're features of general intelligence.'",
  
  "Richard stares at the reports. 'Our competitors are launching next week. Every day we delay costs us the market.' His voice is calm, 'David what do you suggest we do?'",
   
  "David stands before his team, the weight of years of work pressing down. 'We have two paths: break Helix into certified Tool AI modules with guaranteed controls, or release it with behavioral nerfs that might not hold against true general intelligence.'",
     
  "The choice isn't about technology anymore—it's about what kind of future they want to build.",

  "I Suggest '_______________'",

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
             <button onClick={()=>navigate('/play/1/B/A')}>Break Helix into certified Tool AI modules</button>

             <button onClick={()=>navigate('/play/1/B/End2')}>Release with behavioral nerfs and monitoring</button>
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
