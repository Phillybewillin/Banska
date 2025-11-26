
import escrn from '../../assets/boardroom1.png';
import kpa from '../../assets/boardroom1.png';

import '../choiceA/s1.css'
import '../choiceB/S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

export default function Schene4_1() {
    const navigate = useNavigate();
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

 const paragraphs =  [
  "'I can't in good conscience endorse this release,' David says, his voice steady but firm. 'The risks are too profound.'",
  
  "The room goes still. Richard's calm facade shatters. 'David, think about what you're saying. This is your life's work.'",
  
  "'That's exactly why I can't sign off,' David replies. 'I won't be remembered as the architect of humanity's obsolescence.'",
  
  "Miriam studies him with clinical detachment. 'The board will interpret this as professional insubordination.'",
  
  "Jonas smirks. 'There are a hundred brilliant researchers who would kill for your position.'",
  
  "Richard leans forward, his voice dropping to a dangerous whisper. 'Last chance, David. Walk this back, or walk out that door.'",
  
  "David looks at the three faces—ambition, calculation, and cold pragmatism.",
  
  "'Some lines,' he says quietly, 'shouldn't be crossed.'"
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
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1 , scale: 1 }}
              transition={{ delay: paragraphs.length * 0.2, duration: 0.35 }}
            >
             <button onClick={()=>navigate('/play/1/D/End')}>Resign and Take Action</button>
             <button onClick={()=>navigate('/play/1/D/End2')}>Resign and Walk Out</button>
             <button onClick={()=>navigate('/play/1/D/End3')}>Ask for a Board Meeting</button>
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
