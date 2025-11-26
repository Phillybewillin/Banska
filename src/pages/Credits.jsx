// Credits.js
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import './credits.css';

export default function Credits() {
  const navigate = useNavigate();

  return (
    <div className="credits-container">
      <motion.div 
        className="credits-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1>RELEASE DAY</h1>
        
        <div className="credits-section">
          <h2>Inspired by</h2>
          <p>"Keep the Future Human" by Anthony Aguirre</p>
          <p>Black Mirror : BanderSnatch</p>
        </div>

        <div className="credits-section">
          <h2>Created By</h2>
          <p>Markphil / PhillybeWillin</p>
          <h2>Programmed By</h2>
          <p>Markphil / PhillybeWillin</p>
          <h2>Story by</h2>
          <p>Markphil / PhillybeWillin</p>
          
        </div>

        {/* <div className="credits-section">
          <h2>Special Thanks</h2>
          <p>AI Safety Research Community</p>
          <p>Early Testers & Feedback</p>
          <p></p>
        </div> */}

<div className="credits-section">
  <h2>Starring</h2>
  <p>Dr. David Kai as Lead AI Scientist</p>
  <p>Richard Vale as CEO</p>
  <p>Miriam Schultz as Board Representative</p>
  <p>Jonas Reed as Head of Product</p>
</div>

<div className="credits-section">
  <h2>Art & Assets</h2>
  <p>AI-Generated Art with Human Curation</p>
  <p>Original Concept Art & Direction</p>
</div>

<div className="credits-section">
  <h2>Special Thanks</h2>
  <p>Anthony Aguirre - "Keep the Future Human"</p>
  <p>The AI Safety Research Community</p>
  <p>Early Testers & Feedback Team</p>
</div>

        <motion.div
          className="final-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1.5 }}
        >
          <p>"The most important question of our time:</p>
          <p>Will we build tools that empower humanity,</p>
          <p>or successors that replace us?"</p>
        </motion.div>

        <motion.button
          onClick={() => navigate('/')}
          className="menu-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return to Main Menu
        </motion.button>
      </motion.div>
    </div>
  );
}