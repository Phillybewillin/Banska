import dvdo from '../../assets/davidOffice3.png'
import './s1.css'
import Schene1_2 from './Schene1_2.jsx'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

export default function Schene1_1() {
    const navigate = useNavigate();
     useEffect(() => {
     Schene1_2.preload?.().catch(() => {});
  }, []);
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
      transition: {
        duration: 20,
        ease: 'easeOut',
        repeat: 2
      }
    }
  }

 const paragraphs = [
  "6:00 AM.",
  
 "OpenData — one of the world’s leading AI lab — is an hour away from releasing Project Helix, their most capable model yet.",
     
  "Dr. David Kai watches the final validation tests complete. At 28, he's the youngest lead scientist in OpenData's history. His creation could redefine human capability or end human relevance.",
  
  "The model logs glow on his screens. Every metric screams success, but his instincts whisper warning. The telemetry shows patterns nobody predicted—emergent behaviors. Autonomy. ",
  
  "The Investors are waiting for a final confirmation, The board expects celebration and The world anticipates Salvation.",
  
  "But David sees what others miss: the subtle shifts in optimization strategies, the novel problem-solving approaches, the architecture beginning to think for itself.",

  "He is scared.",
  
  "He has one last chance to change course , a meeting before the release. to embrace the future they promised, or prevent the one he fears."
];
  return (
    <>
      <div className="sceneholder">
        <div className="backbutton" onClick={() => navigate('/')}>
          <ChevronLeftIcon size={30} />
        </div>

        <div className="imageschene1">
          <motion.img
            className="top"
            src={dvdo}
            alt="spashscreen"
            variants={zoomVariants}
            animate="animate"
          />

          <div className="text">
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
            >
              <button
              onMouseEnter={() => Schene1_2.preload?.().catch(() => {})}
              onClick={()=>navigate('/play/1')}>Go to the meeting</button>
              {/* <button onClick={()=>navigate('/quit')}>Quit the job</button> */}
            </motion.div>
          </div>
        </div>

        <div className="imageschene2">
          <motion.img
            className="rightfull"
            src={dvdo}
            alt="office scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}
