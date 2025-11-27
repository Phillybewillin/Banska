
import thisendAA from '../../assets/ending1.png'

import './s1.css'

import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useState , useEffect , useRef} from 'react'
import JSConfetti from 'js-confetti'
import Home from '../../pages/Home'
export default function Schene1_3AAEnd1() {
  const navigate = useNavigate();
  useEffect(() => {
    Home.preload?.().catch(() => {});
  })
  const jsConfetti = new JSConfetti()
  const textContainerRef = useRef(null)
  const [confettiFired, setConfettiFired] = useState(false)
  const handleScroll = () => {
      if (textContainerRef.current && !confettiFired) {
        const { scrollTop, scrollHeight, clientHeight } = textContainerRef.current
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10 // 10px tolerance
        
        if (isAtBottom) {
          jsConfetti.addConfetti({
        confettiColors : [
    '#FFD700', // Triumph Gold
    '#C0C0C0', // Control Silver
    '#4169E1', // Global Blue
    '#F0F8FF', // Clarity White
    '#008080', // Augmentation Teal
    '#3CB371'
  ],
            confettiRadius: 5, 
            confettiNumber: 500
          })
          setConfettiFired(true)
        }
      } else{
          setConfettiFired(false)
      }
      
    }
  
    useEffect(() => {
      const textContainer = textContainerRef.current
      if (textContainer) {
        textContainer.addEventListener('scroll', handleScroll)
        
        // Cleanup function
        return () => {
          textContainer.removeEventListener('scroll', handleScroll)
        }
      }
    }, [confettiFired])
  
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

 const paragraphs =[
  `"Yes, I still believe progress requires courage," David says, "but true courage is knowing when to stop. Today proves we've reached that line." He continues, "It's time to see AI differently -as tools that empower people, not replace them."`,
  `His words resonate globally. For the first time, people see AI not as their replacement, but as partners. Nations invoke emergency powers, freezing all AGI training runs.`,
  `The Compute Control Treaty is signed within months. AI chips get hardware-enforced governors, capping both training scale and inference speed.`,
  `Helix and all other models are legally 'toolified'- decomposed into specialized modules: medical analyzers, research assistants, creative collaborators. All require human initiation.`,
  `The AI industry restructures around augmentation. Productivity soars, but humans remain in control. Old jobs adapt, new roles emerge that blend human judgment with AI capability.`,
  `International audit agencies monitor compute worldwide. The race to superintelligence is officially halted.`,
  `AI becomes humanity's greatest tool - empowering people to build a better future, without ceding control. The future remains human.`,
  '..............................................................',
  'The End, You got the Triumphant Ending , Thanks for playing.',
  '       (～￣▽￣)～         '
];


  return (
    <>
      <div className="sceneholder">
        <div className="backbutton" onClick={() => navigate('/')}>
          <ChevronLeftIcon size={30} />
        </div>

        <div className="imageschene1">
          <img
            className="tops1_3A"
            src={thisendAA}
            alt="bc scene"
           
          />

           <div className="textschene1_3A"
           ref={textContainerRef}
           >
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
             {/* <button onClick={()=>navigate('/play/1/A/A/B')}>Go to the conference and speak the truth</button> */}
            </motion.div>
          </div>
        </div>

        <div className="imageschene1_3AEnd">
         
            <motion.img
            className="endimage"
            src={thisendAA}
            alt="scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}
