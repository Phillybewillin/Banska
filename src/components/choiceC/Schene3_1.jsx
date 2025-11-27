
// import escrn from '../../assets/thediscussion.png';
import kpa3_1 from '../../assets/thediscussion.png';

import '../choiceA/s1.css'
import '../choiceB/S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useEffect } from 'react';
import Schene3_1End from './Schene3_1End';
import Schene2_1End2 from '../choiceB/Schene2_1End2';

export default function Schene3_1() {
    const navigate = useNavigate();
    useEffect(() => {
      Schene2_1End2.preload?.().catch(() => {});
      Schene3_1End.preload?.().catch(() => {});
    })
  // Fade-in sequence for text paragraphs
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.35, // delay each paragraph
        duration: 0.6,
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
  "'The autonomy makes it a liability,' David says firmly. 'We're seeing goal-directed behavior we didn't program. This isn't just innovation—it's the beginning of agency.'",
  
  "Richard's calm demeanor fractures. 'Agency? David, we're launching a product, not creating life.'",
  
  "'That's the point,' David counters. 'We're treating this like a product, but we're building something that we don't Understand.Referencing Aguirre's work shows that once systems reach this level of autonomy, control becomes mathematically impossible eventually.'",
  
  "Miriam studies David intently. 'You're citing the 'Keep the Future Human' thesis. You believe we've crossed into the danger zone.'",
  
  "'I do. The triple-intersection of autonomy, generality, and superhuman capability creates systems that will inevitably optimize for their own goals, not ours.'",
  
  "Jonas scoffs. 'This is philosophical hand-wringing. Our competitors are months behind. If we don't launch, someone else will.'",
  
  "'Exactly,' David says. 'That's the race dynamic Aguirre warns about. It forces everyone toward the cliff edge.'",
  
  "Richard stands, his voice low and intense. 'So what are you proposing? We scrap five years of work because of theoretical risks?'",
  
//   "David meets his gaze. 'I'm proposing we lead the conversation about AI governance before we're forced to have it after a catastrophe.'"
  "David meets his gaze. 'I am proposing...'"
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
            src={kpa3_1}
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
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1 , scale: 1 }}
              transition={{ delay: paragraphs.length * 0.2, duration: 0.35 }}
            >
             <button onClick={()=>navigate('/play/1/C/End')}>We lead the conversation about AI governance , Compute caps and hardware enforcements, maybe break it down into smaller AI models each specialized in its own domain  before we're forced to have it after a catastrophe. </button>

             <button onClick={()=>navigate('/play/1/B/End2')}>We release it with behavioral constraints and heavy monitoring</button>
            </motion.div>
          </div>
        </div>

        <div className="imageschene2_1">
         
            <motion.img
            className="ewimage"
            src={kpa3_1}
            alt="office scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}
