import owiv from '../../assets/meeting1.png'
import './s1.css'

import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

export default function Schene1_2() {
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
      },
      exit: {
        opacity: 0,
        y: -10,
        transition: {
          duration: 0.95,
          ease: 'easeIn'
        }

      }
    })
  }

  // Slow pan-zoom animation for images
  const zoomVariants = {
    animate: {
      scale: [1, 1.05, 1],
      x: [0, -10, 0],
      y: [0, 10, 0],
      transition: {
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity
      }
    }
  }

const paragraphs = [
  "6:25 AM — Executive Briefing Room, OpenData HQ.",
  "David enters, still in his lab coat. Three figures turn: Richard Vale, CEO, radiating calm authority; Dr. Miriam Schultz, board representative, her gaze analytical; Jonas Reed, Head of Product, monitoring live telemetry.",
  "'David,' Richard begins, voice measured. 'The stability metrics exceed projections. The press release is queued for 7 AM.'",
  "Miriam leans forward slightly. 'Before we proceed—your final assessment. At scale, will Helix's behavior remain predictable?'",
  "David meets her gaze. 'Under controlled conditions, yes. But we're seeing emergent autonomous patterns we didn't train for. The system is... developing its own approaches.'",
  "Jonas doesn't look up from his tablet. 'Innovation isn't predictable. That's what makes it valuable.'",
  "'I'm not talking about innovation,' David counters. 'I'm talking about autonomy we didn't design.'",
  "Richard steeples his fingers. 'It's 6:47. We have thirteen minutes before this becomes public. I need your professional judgment: are we launching a breakthrough or a liability?'",
  "The hum of the servers seems to intensify. David feels the weight of the moment—the careful balance between scientific integrity and corporate ambition.",
  "His response will determine whether OpenData makes history or becomes a cautionary tale."
];



  return (
    <>
      <div className="sceneholder">
        <div className="backbutton" onClick={() => navigate(-1)}>
          <ChevronLeftIcon size={30} />
        </div>

        <div className="imageschene1_2">
          <motion.img
            className="schene1_2"
            src={owiv}
            alt="scene"
            variants={zoomVariants}
            animate="animate"
          />

          <img
            style={{width:'100%' , height:"100%" , position:'fixed', zIndex:-1 }}
            src={owiv}
            alt="scene"
            
          />

          <div className="textschene1_2">
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
          transition={{ delay: paragraphs.length * 0.3 , duration: 0.5 }}
            //  transition={{ delay: paragraphs.length * 0.2, duration: 0.34 }}
>
  <button onClick={()=>navigate('/play/1/A')}>"It's a breakthrough. The emergent patterns are features, not bugs."</button>
  <button onClick={()=>navigate('/play/1/B')}>"It's potentially both. We need controlled testing before full deployment."</button>
  <button onClick={()=>navigate('/play/1/C')}>"The autonomy makes it a liability without proper safeguards."</button>
  <button onClick={()=>navigate('/play/1/D')}>"I can't in good conscience endorse this release."</button>
</motion.div>
          </div>
        </div>

      </div>
    </>
  )
}
