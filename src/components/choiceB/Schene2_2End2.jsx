
// import escrn from '../../assets/ENDINGGOLDEN.png';
import kpaG from '../../assets/ENDINGGOLDEN.png';

import '../choiceA/s1.css'
import './S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useState , useEffect} from 'react'
import JSConfetti from 'js-confetti'

export default function Schene2_2End2() {
  const navigate = useNavigate();
  const jsConfetti = new JSConfetti()
  const [confettiFired, setConfettiFired] = useState(false)
  // const handleScroll = () => {
  //     if (textContainerRef.current && !confettiFired) {
  //       const { scrollTop, scrollHeight, clientHeight } = textContainerRef.current
  //       const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10 // 10px tolerance
        
  //       if (isAtBottom) {
  //         jsConfetti.addConfetti({
  //         confettiColors: [
  //        '#FFD700', '#FFEC8B', '#FFFACD', '#FFA500', '#FF8C00', '#FF6347'
  //       ],
  //           confettiRadius: 5, 
  //           confettiNumber: 500
  //         })
  //         setConfettiFired(true)
  //       }
  //     } else{
  //         setConfettiFired(false)
  //     }
      
  //   }
  //   useEffect(() => {
  //     const textContainer = textContainerRef.current
  //     if (textContainer) {
  //       textContainer.addEventListener('scroll', handleScroll)
        
  //       // Cleanup function
  //       return () => {
  //         textContainer.removeEventListener('scroll', handleScroll)
  //       }
  //     }
  //   }, [confettiFired])

    useEffect(() => {
    // Check if confetti hasn't fired yet
    if (!confettiFired) {
      // Set the delay (e.g., 10 seconds = 10000 milliseconds)
      const timer = setTimeout(() => {
        // Only fire if the component is still mounted and confetti hasn't fired
        jsConfetti.addConfetti({
          confettiColors: [
            '#FFD700', '#FFEC8B', '#FFFACD', '#FFA500', '#FF8C00', '#FF6347'
          ],
          confettiRadius: 5, 
          confettiNumber: 500
        });
        setConfettiFired(true);
      }, 7000); // 10000 ms = 10 seconds
      
      // Cleanup the timeout if the component unmounts before 10 seconds
      return () => clearTimeout(timer);
    }
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
  "OpenData discloses the incident and works with regulators to establish the AI Safety Framework. Progress slows as compliance requirements multiply.",
  
  "The framework becomes global standard. Compute limits, mandatory audit trails, and cross-domain safety checks prevent similar near-misses across the industry.",
  
  "Med-Helix, now under strict oversight, helps eradicate three forms of cancer with zero adverse effects. The tool AI proves its worth under proper governance.",
  
  "OpenData becomes the gold standard for responsible AI development. Smaller, reckless competitors are regulated out of existence.",
  
  "The future progresses safely, if slowly. Humanity reaps AI's benefits without catastrophic risks—exactly the future Aguirre envisioned.",
  
  "..........................................................................",

  "The Golden Ending.",
  " (✿◡‿◡) ",


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
            src={kpaG}
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
             <button onClick={()=>navigate('/')}>Play Again</button>

             {/* <button onClick={()=>navigate('/play/1/B/End2')}>Release with behavioral nerfs and monitoring</button> */}
            </motion.div>
          </div>
        </div>

        <div className="imageschene2_1">
         
            <motion.img
            className="ewimage"
            src={kpaG}
            alt="office scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}
