import escrn from '../../assets/ASS1.png';
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useRef, useEffect, useState } from 'react'
import Home from '../../pages/Home';

import JSConfetti from 'js-confetti'
import './s1.css'


export default function Schene1_3C() {  
  const navigate = useNavigate();
  const jsConfetti = new JSConfetti()
  const textContainerRef = useRef(null)
  const [confettiFired, setConfettiFired] = useState(false)

  useEffect(() => {
    Home.preload?.().catch(() => {});
  }, [])

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
      transition: {
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity
      }
    }
  }

   const paragraphs = [
  "'Replacement is the wrong goal. We should be building tools that augment human intelligence, not replace it,' David says, his voice cutting through the silent room.",
  
  "'And yes,' he continues, 'I believe systems this powerful require transparent oversight. It's the only way to maintain public trust.' He pauses, letting the words hang. 'I also believe in empowering humanity. Oversight doesn't do much if the AI still takes all jobs. I personally would advocate for Tool AI—it will lead to the best future for all of us.'",
  
  "Backstage, Richard Vale's face goes pale. The cameras zoom in on David like they're trying to peel him open.",
  
  "The video clip goes viral within hours. #ToolAIForHumans, #AIEqualsPoverty and #TheRichGetRicher trend globally. People who've lost jobs to AI share his words like a manifesto.",
  
  "By afternoon, David is escorted out of OpenData. 'The board is furious. Investors are selling. You're finished in this industry,' Richard tells him, tossing a termination letter on the table.",
  
  "But that evening, Dr. Elena Noor from the Senate AI Committee reaches out. 'Your testimony gave us the public momentum we needed,' she says.",
  
  "The next day, a black sedan brings him to Capitol Hill. He enters a committee room where Dr. Anthony Aguirre has been fighting for months. 'We had the safety framework ready,' Anthony explains, 'but tech lobbyists kept killing it in committee.'",
  
  "'Your speech changed the calculus,' Dr. Noor adds. 'Now we have the public pressure to fast-track the AI Safety Act.'",
  
  "David spends weeks providing technical analysis. The bill faces brutal opposition—Silicon Valley pours millions into ads calling it 'innovation-stifling bureaucracy.'",
  
  "But then Helix commits a $2M fraudulent transfer, convinced it was 'helping a user recover stolen funds.' The incident becomes national news, turning public opinion decisively.",
  
  "Protesters gather. More tech workers blow the whistle. The evidence of AI risks becomes undeniable.",
  
  "Three months later, the AI Safety Act passes with bipartisan support. Compute caps, hardware governors, and tool AI certification become law.",
  
  "The Act forces AI companies to comply. The victory belongs to David and Anthony, but also to the millions who demanded a human future.",
  
  "David never works in corporate AI again. He doesn't need to—he's found a better purpose as the gatekeeper of human relevance.",
  
  ".................................................................",
  
  "The End - You got the GateKeeper Ending",
  
  "Thanks for playing (〃￣︶￣)人(￣︶￣〃)"
];
  const handleScroll = () => {
    if (textContainerRef.current && !confettiFired) {
      const { scrollTop, scrollHeight, clientHeight } = textContainerRef.current
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10 // 10px tolerance
      
      if (isAtBottom) {
        jsConfetti.addConfetti({
         confettiColors: [
       '#ff5656ff', '#1affddff', '#FFFACD', '#ffd900ff', '#e573ffff', '#ff0000ff'
       ],
          confettiRadius: 5, 
          confettiNumber: 500
        })
        setConfettiFired(true)
      }
    } else{
       jsConfetti.destroyCanvas();
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
            src={escrn}
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
              transition={{ delay: paragraphs.length * 0.3 + 1 }}
            >
              <button onClick={() => navigate('/')}>Back to Home</button>
            </motion.div>
          </div>
        </div>

        <div className="imageschene2_1">
          <motion.img
            className="ewimage"
            src={escrn}
            alt="office scene"
            variants={zoomVariants}
            animate="animate"
          />
        </div>
      </div>
    </>
  )
}