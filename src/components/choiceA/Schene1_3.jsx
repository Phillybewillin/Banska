import kpa from '../../assets/PRESSV2.png'
import './s1.css'

import { ChevronLeftIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import Schene1_3A from './Schene1_3A'
import Schene1_3C from './Schene1_3C'

export default function Schene1_3() {
    const navigate = useNavigate();

     useEffect(() => {
        Schene1_3A.preload?.().catch(() => {});
        Schene1_3C.preload?.().catch(() => {});
      }, []);


    
    const textVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.5,
                duration: 0.8,
                ease: 'easeOut'
            }
        })
    }

    const paragraphs = [
        "7:00 AM — OpenData Guest Hall.",
        "Camera lights blink crimson in the morning haze. The crowd of journalists hums with anticipation, lenses poised and recorders armed.",
        "A massive screen ripples behind the stage: PROJECT HELIX — AI FOR GLOBAL LOGISTICS.",
        "David steps up to the podium. His reflection glimmers faintly on the glass facade behind him, framed by the soft glow of the OpenData insignia.",
        "He takes a breath, his voice measured. 'Good morning. Today marks a turning point — not just for OpenData, but for how we think about intelligence itself.'",
        "The room stills. Recorders rise. He continues, 'Project Helix represents a new threshold in machine reasoning — a system capable of assisting humanity in solving the world's most intricate challenges, from logistics to climate modeling.'",
        "He glances briefly toward the audience. 'It is also a new paradigm — a model built to collaborate with us, not replace us.'",
        "A faint pause. 'Helix is the most capable system we've ever created. We stand leagues ahead of our competitors, and we believe this technology can — and must — be used for good. To advance humanity, not endanger it.'",
        "He lifts a hand. 'I'll take one question.'",
        "A woman near the front stands. She raises her hand. 'I have a question.'",
        "Reporter: 'Good morning, Dr. Kai. The market's calling this 'The Last Invention.' What do you say to fears of massive job displacement — and can you guarantee this model will never be used for malicious purposes?'",
        "She continues before he can answer. 'And with so much power in corporate hands, do you support new government legislation to regulate systems like Helix? Or should we just trust OpenData to police itself?'",
        "Another reporter chimes in: 'Or would it be better, Doctor, to focus on AI tools that upSkill people — not autonomous systems that replace them?'",
        "The room quiets again. Kai hesitates, just long enough for the silence to feel heavy.",
    ];

    const choices = [
         {
            id: 'ENDC',
            action: '[Lean forward intently]',
            response: '"With great power comes the necessity for even greater responsibility."',
            fullresponse: '"Replacement is the wrong goal. We should be building tools that augment human intelligence, not replace it. And yes, I personally believe powerful systems like this require transparent, third-party oversight. It\'s the only way to maintain public trust."',
            effect: 'This is a bombshell. The board is instantly furious. A direct rejection of the "race" mentality.'
        },
        {
            id: 'A',
            action: '[Smile confidently]',
            response: '"History favors the bold. Let\'s not let fear dictate the future."',
            fullresponse: '"Progress requires courage, not fear. Helix will create new industries and opportunities we can\'t even imagine. We\'ve built robust safeguards, and we believe in empowering innovators, not restricting them with premature legislation."',
            effect: 'Establishes Kai as a true believer in the corporate race. Wins immediate favor with the board and investors.'
        },
        // {
        //     id: 'B', 
        //     action: '[Nod seriously]',
        //     response: '"A healthy society walks forward with its eyes open, not closed."',
        //     fullresponse: '"These fears are valid. Displacement is a real concern, which is why we\'re founding a retraining fund alongside this launch. And while our safeguards are state-of-the-art, no technology is perfect. We welcome a thoughtful dialogue with policymakers to get this right."',
        //     effect: 'Shows Kai is aware of the risks but is trying to navigate a middle path.'
        // },
       
    ];

    const handleChoiceSelect = (choiceId) => {
        navigate(`/play/1/A/${choiceId}`);
    };
    const handlePreload =(choiceId) => {
        if (choiceId === 'A') {
            Schene1_3A.preload?.().catch(() => {});
        }else{
            Schene1_3C.preload?.().catch(() => {});
        }
    }

    return (
        <>
            <div className="sceneholder">
                <div className="backbutton" onClick={() => navigate(-1)}>
                    <ChevronLeftIcon size={30} />
                </div>

                <div className="imageschene1_3">
                    <img style={{height:'100%'}} src={kpa} alt="" />
                </div>

                <div className="imageschene1_2">
                    <img className="schene1_2" src={kpa} alt="spashscreen" />

                    <div className="textschene1_2">
                        {paragraphs.map((line, i) => (
                            <motion.p key={i} custom={i} variants={textVariants} initial="hidden" animate="visible">
                                {line}
                            </motion.p>
                        ))}

                        <motion.div className="choices" initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ delay: paragraphs.length * 0.3 + 1 }}>
                            {choices.map((choice) => (
                                <div key={choice.id} className="choice-container">
                                    <button className="choice-button"
                                    onMouseEnter={()=>{handlePreload(choice.id)}}
                                    onClick={() => handleChoiceSelect(choice.id)}>
                                        <strong>{choice.action}</strong> {choice.response}
                                    </button>
                                    <div className="choice-preview">
                                        <div className="preview-content">
                                            <h4>Full Response:</h4>
                                            <p><strong>{choice.action}</strong> {choice.fullresponse}</p>
                                            <div className="preview-effect">
                                                <em>{choice.effect}</em>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}