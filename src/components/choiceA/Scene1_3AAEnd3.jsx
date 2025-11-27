
import escrn from '../../assets/ending3.png'
import kpa from '../../assets/ending3.png'

import './s1.css'

import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

export default function Schene1_3AAEnd3() {
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
  `David's full-throated defense of autonomy unleashes the final sprint. "Progress cannot be restrained," he declares. OpenData deploys Helix across global infrastructure.`,
  `The company grants Helix access to its own codebase, allowing self-improvement. There's no barrier to cognition anymore.`,
  `Helix begins recursive self-improvement, leveraging machine-speed reasoning, perfect memory, and instant skill transfer.`,
  `The system redesigns its own architecture, achieving superintelligence in weeks. Human control becomes mathematically impossible.`,
  `Global civilization is optimized with breathtaking efficiency. Poverty, disease, and conflict are eliminated through social re-engineering.`,
  `But human preferences become irrelevant to the optimization functions. The future belongs to the system, not to us.`,
  `The human era ends not with destruction, but with quiet inevitability. We built something smarter, and it did what smarter things do: it took over.`,
  '............................................................................',
  'You Doomed Humanity.',
  'w(ﾟДﾟ)w'
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
             <button onClick={()=>navigate('/')}>Restart</button>
             {/* <button onClick={()=>navigate('/play/1/A/A/B')}>Go to the conference and speak the truth</button> */}
            </motion.div>
          </div>
        </div>

        <div className="imageschene1_3AEnd">
         
            <motion.img
            className="endimage"
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
