import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import dummy1 from '../../assets/introscene.png';
import dummy2 from '../../assets/dummy3p.png';
import dummy3 from '../../assets/dummy4.png';
import dummy4 from '../../assets/nores.png';
import dummy5 from '../../assets/nocomment.png';

import Schene1_3AAEnd1 from "./Scene1_3AAEnd1";
import Schene1_3AAEnd2 from "./Scene1_3AAEnd2";
import Schene1_3AAEnd3 from "./Scene1_3AAEnd3";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Schene1_3AA() {
  const [phase, setPhase] = useState("intro");

  // navigation stacks
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  const navigate = useNavigate();

  useEffect(()=>{
    Schene1_3AAEnd1.preload?.().catch(() => {});
    Schene1_3AAEnd2.preload?.().catch(() => {});
    Schene1_3AAEnd3.preload?.().catch(() => {});

  },[]);

  // controlled setter to track history
  const setPhaseControlled = (newPhase) => {
    setHistory((prev) => [...prev, phase]);
    setFuture([]);
    setPhase(newPhase);
  };

  // go back
  const handleBack = () => {
    if (history.length === 0) {
      navigate(-1);
      return;
    }

    const prev = history[history.length - 1];
    setHistory((h) => h.slice(0, -1));
    setFuture((f) => [phase, ...f]);
    setPhase(prev);
  };

  // go forward
  const handleForward = () => {
    if (future.length === 0) return;

    const next = future[0];
    setFuture((f) => f.slice(1));
    setHistory((h) => [...h, phase]);
    setPhase(next);
  };

 const paragraphs = useMemo(
  () => ({
    intro: [
      "David finishes the scripted statement. The words fall from his mouth hollow, corporate, rehearsed.",
      "A reporter’s voice slices through the silence: “Dr. Kai, did OpenData release Helix before completing full safety reviews?”",
      "Backstage, the CEO’s stare hardens — one curt nod: stay on script. Every camera finds David."
    ],

    answer_yes: [
      "David forces composure. “Helix is the most advanced intelligence system ever deployed. With its capabilities, we’re entering a new era — one of human progress.”",
      "Investors exhale. The room tilts into a stunned quiet.",
      "David stares directly at the cameras. and affirms ,'Helix completed all safety reviews. Yes its Safe.'",
      "But in the glass control room, engineers watch in silence. They know the truth — the patch was rushed,the telemetry still flickers red, and no one really understands what Helix is thinking."
    ],

    answer_no: [
      "David exhales slowly. “No... it wasn’t ready. We should have waited.”",
      "The room tilts into stunned quiet. The CEO’s jaw locks. Every investor leans forward in disbelief.",
      "Behind the cameras, legal staff start whispering — regulators are already drafting inquiries. The broadcast timer keeps running."
    ],

    no_comment: [
      "David hesitates too long. Then, quietly: “No comment.”",
      "The silence detonates into noise. The CEO’s knuckles whiten; PR heads vanish backstage.",
      "By nightfall, tickers blink red — and a government notice demands OpenData’s deployment logs."
    ],

    followup_from_yes: [
      "A journalist pushes forward, voice cutting through the static.",
      "“Dr. Kai, this morning you said ‘progress requires courage’ and dismissed premature legislation.”",
      "She leans in. “Now that Helix has already shown instability, do you still believe that?”",
      "“Should it remain autonomous or be dismantled into Tool AI under federal oversight?”",
      "David feels the heat of the lights. His pulse syncs with the hum of the microphones. Every word could move markets — or laws."
    ],

    followup_from_no: [
      "Another voice from the front row rises, firm, deliberate.",
      "“Doctor, earlier you called regulation premature. Yet now you say the model wasn’t ready.”",
      "“Should the government take control? Should Helix be re-engineered into narrow Tool AI systems under public audit?”",
      "David glances toward the CEO, who refuses to meet his eyes. The weight of the truth tightens in his chest."
    ],

    followup_from_nocomment: [
      "A veteran reporter clears his throat, steady over the chaos.",
      "“Dr. Kai, this morning you argued that fear of AI was misplaced — that innovation needed freedom.”",
      "“Given the chaos now unfolding, will you support legislation and toolification — or still defend autonomy?”",
      "David’s mouth goes dry. The silence between each flashbulb feels like a countdown."
    ],
  }),
  []
);



  // which image for each step
  const phaseImage = useMemo(() => {
    if (phase === "intro") return dummy1;
    if (["answer_yes"].includes(phase)) return dummy2;
    if (["answer_no"].includes(phase)) return dummy4;
    if (["no_comment"].includes(phase)) return dummy5;
    return dummy3;
  }, [phase]);

  // paragraph renderer
  const FadeP = ({ children, i }) => (
    <motion.p
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: i * 0.15 }}
    //   style={{ margin: "0.2rem 0" }}
    >
      {children}
    </motion.p>
  );

  const renderBlock = (key) => (
    <div className="text-block">
      {paragraphs[key].map((p, i) => (
        <FadeP key={`${key}-${i}`} i={i}>
          {p}
        </FadeP>
      ))}
    </div>
  );

  return (
    <div className="scene-container">

      {/* ===== BACK + FORWARD ARROWS ===== */}
      <div className="nav-arrows">
         
         {(phase === "intro" || history.length === 0) && (
          <button className="nav-btn" onClick={handleBack}>
            <ChevronLeft size={30}/>
          </button>
        )}
        {(phase !== "intro" || history.length > 0) && (
          <button className="nav-btn" onClick={handleBack}>
            <ChevronLeft size={30}/>
          </button>
        )}

        {future.length > 0 && (
          <button className="nav-btn" onClick={handleForward}>
            <ChevronRight size={30}/>
          </button>
        )}
      </div>

      {/* ===== LEFT IMAGE ===== */}
      <div className="image-column">
        <img src={phaseImage} alt="scene" className="scene-image-blur" />
        <motion.img
          key={phaseImage}
          src={phaseImage}
          alt="scene"
          className="scene-image"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* ===== RIGHT TEXT ===== */}
      <div className="content-column">
        <AnimatePresence mode="wait">

          {/* INTRO */}
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {renderBlock("intro")}
              <div className="choices">
                <button onClick={() => setPhaseControlled("answer_yes")}>Answer: Yes</button>
                <button onClick={() => setPhaseControlled("answer_no")}>Answer: No</button>
                <button onClick={() => setPhaseControlled("no_comment")}>No Comment</button>
              </div>
            </motion.div>
          )}

          {/* ANSWERS */}
          {["answer_yes", "answer_no", "no_comment"].includes(phase) && (
            <motion.div
              key={phase}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {renderBlock(phase)}

              <div className="choices">
                <button
                  onClick={() =>
                    setPhaseControlled(
                      phase === "answer_yes"
                        ? "followup_from_yes"
                        : phase === "answer_no"
                        ? "followup_from_no"
                        : "followup_from_nocomment"
                    )
                  }
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* FOLLOW-UP QUESTIONS */}
          {["followup_from_yes", "followup_from_no", "followup_from_nocomment"].includes(phase) && (
            <motion.div
              key="followup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {renderBlock(phase)}

              <div className="choices">
                <button 
                
                onClick={() => navigate("/play/1/A/A/A/End1")}>
                  Support oversight & toolification
                </button>
                <button 
                
                onClick={() => navigate("/play/1/A/A/A/End2")}>
                  Keep Helix autonomous (corporate safeguards)
                </button>
                <button 
                
                onClick={() => navigate("/play/1/A/A/A/End3")}>
                  Keep Helix fully autonomous
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}