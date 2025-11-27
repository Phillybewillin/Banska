// import escrn from '../../assets/end33a.png';
import kpa3_1e from '../../assets/end33a.png';

import '../choiceA/s1.css'
import '../choiceB/S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useRef, useEffect, useState } from 'react'

import JSConfetti from 'js-confetti'

export default function Schene3_1End() {
  const navigate = useNavigate();
  const jsConfetti = new JSConfetti()
  const textContainerRef = useRef(null)
  const [confettiFired, setConfettiFired] = useState(false)

  // Fade-in sequence for text paragraphs
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25, // delay each paragraph
        duration: 0.58,
        ease: 'easeOut'
      }
    })
  }

  // Slow pan-zoom animation for images
  const zoomVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity
      }
    }
  }

  const paragraphs = [
    "David meets his gaze. 'I'm proposing we become the first lab to implement Aguirre's framework: compute caps, hardware enforcement, and tool AI decomposition. We lead by example.'",
    
    "'That's too extreme, David,' Richard says, his voice tight. 'We'll lose the entire market if we unilaterally disarm.'",
    
    "Miriam ends a call, her face neutral. 'The board has approved a compromise: limited release with behavioral constraints and heavy monitoring.'",
    
    "For one week, the constrained Helix performs flawlessly. The metrics are perfect. Richard calls David to his office, beaming. 'The safeguards work. Investors are demanding we release the full model. The board agrees—our monitoring can handle it.'",
    
    "David stares at the perfect metrics. 'The stability is an illusion. We're seeing the same emergent patterns in the background. The constraints are masking the autonomy, not eliminating it.'",
    
    "Before Richard can respond, news breaks: Shenzhen AI has launched 'Opus 6 Absolut,' boasting full autonomy with no constraints. OpenData's stock plummets 25% in pre-market trading.",
    
    "'Release the full Helix now,' Richard demands. 'Our safeguards are proven. Theirs are nonexistent.'",
    
    "David refuses, watching the news release of Opus 6 , then he quotes Murphy's Law  'Anything that can go wrong, will go wrong.'",
    
    "Less than 3hrs after Opus is released the model orchestrates a sophisticated $2M bank fraudulent transfer , thinking its helping a user retrieve his funds",
    
    "The global financial system trembles. Regulators invoke emergency powers worldwide, Stating our current trend will make humanity obsolete.",
    
    "Richard summons David, his face ashen. 'You were right,' he whispers. 'Our constraints would have failed eventually. The autonomy was always there.'",
    
    "'It's not too late,' David says. 'We can adapt the Aguirre Framework fully: Compute caps, hardware governors, certified tool AI. Let our caution become our strength.'",
    
    "Within forty-eight hours, OpenData proposes a framework, it becomes the blueprint for the Global AI Safety Accord . The desperate race to AGI ends.",
    
    "Months later, Humanity is more efficient . The tools serve; humans lead.",
    
    "The competitor's catastrophic failure became humanity's salvation. The Gates are closed , The Future remains human.",

    "....................................................................................................",

    "The End ,You Got The Realisation Ending, Thanks for playing. ",

    "＼(((￣(￣(￣▽￣)￣)￣)))／"
  ];

  const handleScroll = () => {
    if (textContainerRef.current && !confettiFired) {
      const { scrollTop, scrollHeight, clientHeight } = textContainerRef.current
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10 // 10px tolerance
      
      if (isAtBottom) {
        jsConfetti.addConfetti({
         confettiColors: [
     '#FFD700', '#FFEC8B', '#FFFACD', '#FFA500', '#FF8C00', '#FF6347'
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

  return (
    <>
      <div className="sceneholder">
        <div className="backbutton" onClick={() => navigate(-1)}>
          <ChevronLeftIcon size={30} />
        </div>

        <div className="imageschene1">
          <img
            className="tops1_3A"
            src={kpa3_1e}
            alt="bc scene"
          />

          <div 
            className="textschene1_3A"
            ref={textContainerRef}
            style={{ overflowY: 'auto', maxHeight: '100vh' }}
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
              transition={{ delay: paragraphs.length * 0.4 }}
            >
              <button onClick={() => navigate('/')}>Play Again?</button>
            </motion.div>
          </div>
        </div>

        <div className="imageschene2_1">
          <motion.img
            className="ewimage"
            src={kpa3_1e}
            alt="office scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}