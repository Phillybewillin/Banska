import escrn from '../../assets/4_1e2.png';
import kpa from '../../assets/4_1e2.png';

import '../choiceA/s1.css'
import '../choiceB/S2.css'
import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

export default function Schene4_1End2() {
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
      transition: {
        duration: 20,
        ease: 'easeInOut',
        repeat: Infinity
      }
    }
  }

  const paragraphs = [
  "David places his badge on the table. 'I'm done.' He walks out, leaving his life's work in the hands of men who only understand profit.",
  
  "OpenData promotes Jonas Reed as the new project lead. He doesn't waste Time, he approves Helix's full release right on schedule. 'Progress waits for no one,' he adds. As he leaves to head to the press conference launch.",

  "Helix is released. It's praised as 'AGI', minutes pass every benchmark reads 99.8%, and for the first time, humanity is genuinely scared.",

 "Then job losses start in weeks, as the Helix agent layer is adapted into companies . First the call centers—30,000 jobs gone overnight. Then paralegals, analysts, coders. Unemployment hits 11%, then 19% globaly, and rising  . The stock market soars while main street collapses.",
  
  "David watches protests daily from his apartment. People marching against AI taking their jobs . they're marching for food, for rent money, for survival. The systems work perfectly, AI proves incredibly profitable for investors, but at the cost of everyone else",

   "Then the chaos begins. Desperate engineers use Helix to find security vulnerabilities in an aim of at least making some money. Bank systems crash as vulnerabilities are found and the model helps make the exploitation possible . The very tools meant to optimize society become weapons in the hands of the desperate, as basic human decision-making becomes ceremonial",

"The systems don't become sentient. They don't need to. They just make human labor worthless, and make investors and shareholders money , a whole lot of it , as the common man is left not able to afford anything . The most boring apocalypse imaginable, and David saw it coming.",
  
 "David's regret is a constant companion. He was right about the danger, and eventually the system will break, man can only take so much , or maybe the model choking in its own hallucinations. David contemplates: When will it happen, and how catastrophic will it be? He regrets his decision and wishes he had changed this future when he had the chance.",

 "[Try Again?]",

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

          <div 
            className="textschene1_3A"
            // ref={textContainerRef}
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
              <button onClick={() => navigate('/play/1')}>Try Again</button>
              <button onClick={() => navigate('/')}>Give Up</button>
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