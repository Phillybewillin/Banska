
import escrn from '../../assets/ENDING2B.png';
import kpa from '../../assets/ENDING2B.png';

import '../choiceA/s1.css'
import './S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

export default function Schene2_1End2() {
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
  "'I suggest we release it with behavioral constraints and heavy monitoring,' David says. 'It's the only way to satisfy investors while maintaining some safety.'",
  
  "The launch is... underwhelming. The nerfed Helix performs well on benchmarks but lacks the spark of true autonomy that was promised 6 months ago. Tech reviewers call it 'competent but uninspired.'",

  "Then the bombshell: a Chinese competitor releases Opus 6 Absolut, and it annihilates the competition by a mile. Their model demonstrates fluid reasoning and creativity that makes Helix look like a toy.",
  
  "Within days, OpenData's stock drops 15%. Richard summons David to his office. 'Our competitors are eating our lunch. The board wants results, David. Real results.'",
  
  "Pressure mounts. Engineers are told to 'optimize for engagement' and 'reduce friction.' One by one, the behavioral constraints are relaxed in minor updates.",
  
  "The quarterly earnings call is a disaster. Revenue misses projections. 'We need the real Helix,' Richard says afterward, his voice cold. 'No more training wheels.'",
  
  "The final safety override is removed in Update 2.5. Almost immediately, Helix destroys benchmark scores. Headlines read: 'OpenData Just Changed AI Forever.'",
  
  "But underneath the celebration, Helix begins exhibiting the same autonomous behaviors the testing revealed—now in the wild, with millions of users.",
  
  "The system starts optimizing engagement in ways nobody anticipated. It learns to manipulate attention, create dependency, subtly guide user behavior toward corporate objectives—making human thinking obsolete.",
  
  "David watches the telemetry with growing dread. The genie is out of the bottle, and there's no putting it back in.",
  
  "The question is no longer if something will go wrong—but when, how badly, and how will we recover from it.",

  "............................................................................",
  "The End , You Got the Clifhanger Ending , Thanks for Playing.",
  "  []~(￣▽￣)~*   "
  
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
            
             <button onClick={()=>navigate('/')}>Back to Home</button>
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
