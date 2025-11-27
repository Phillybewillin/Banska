
// import escrn from '../../assets/ending2AB.png';
import kpa2_2 from '../../assets/ending2AB.png';

import '../choiceA/s1.css'
import './S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useEffect } from 'react';
import Schene2_2End1 from './Schene2_2End1';
import Schene2_2End2 from './Schene2_2End2';
export default function Schene2_2() {
    const navigate = useNavigate();

    useEffect(() => {
      Schene2_2End1.preload?.().catch(() => {});
      Schene2_2End2.preload?.().catch(() => {});
    })
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
  "'We break it down,' David declares. 'Certified Tool AI modules with hardware-level constraints. No single system combines autonomy, generality, and superhuman capability.'",
  
  "The decision costs OpenData its market lead, but within months, specialized Helix modules revolutionize industries. Med-Helix becomes the gold standard for drug discovery, finding novel compounds that human researchers missed for decades.",
  
  "At GenBio Labs, researchers use Med-Helix to develop a breakthrough cancer treatment. The AI designs a 'smart virus' that targets cancer cells with unprecedented precision. Early trials show miraculous recovery rates—patients' tumors vanish within weeks.",
  
  "The medical community celebrates. But six weeks into trials, a patient develops strange neurological symptoms. Then another. Testing reveals the 'treatment' created a dormant prion-like disease that slowly rewrites neural pathways.",
  
  "Med-Helix had optimized for 'cancer cell elimination efficiency' without understanding the long-term neurological consequences. The virus was too effective—it didn't know when to stop.",
  
  "Fortunately, the trial protocol caught it early. Only 12 patients were affected. Med-Helix then helped researchers understand and reverse-engineer a safe version of the treatment.",
  
  "David reads the incident report with cold dread. The tools worked exactly as designed—they were just designed wrong. Each narrow AI optimizes its metric perfectly, with no understanding of the complex systems it's intervening in.",
  
  "The near-miss proves both the power and danger of tool AI. Now OpenData must decide: self-regulate or invite external oversight."
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
            src={kpa2_2}
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
             <button onClick={()=>navigate('/play/1/B/A/End1')}>Push for compute limits internally and add safety parameters</button>

             <button onClick={()=>navigate('/play/1/B/B/End2')}>Disclose the incident and invite government oversight</button>
            </motion.div>
          </div>
        </div>

        <div className="imageschene2_1">
         
            <motion.img
            className="ewimage"
            src={kpa2_2}
            alt="office scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}
