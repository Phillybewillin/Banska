import { useState, useEffect } from 'react';
import spashscreen from '../assets/spashscreen.png';
import { ChartNoAxesGantt, X } from 'lucide-react';
import '../App.css';
import { useNavigate } from 'react-router';
import Credits from './Credits';
import Schene1_1 from '../components/choiceA/Schene1-1';

function Home() {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    useEffect(() => {
        Schene1_1.preload?.().catch(() => {});
        Credits.preload?.().catch(() => {});
       
    }, []);

    return (
        <>
            <div>
                <div className="topbar">
                    <button 
                        className="menu-button"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <ChartNoAxesGantt size={20} />
                    </button>
                    
                    <div className="left">
                        <p>Made by PhillybeWillin</p>
                    </div>
                </div>

                {/* Sidebar */}
                {sidebarOpen && (
                    <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}>
                        <div className="sidebar">
                            <button 
                                className="close-button"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <X size={20} />
                            </button>
                           
                            <div className="sidebar-links">
                                <button
                                onMouseEnter={() => Credits.preload()}
                                onClick={() => navigate('/credits')}>Credits</button>
                                <button onClick={() => window.open('https://interactive.keepthefuturehuman.ai/', '_blank')}>
                                    Learn More
                                </button>
                                <button onClick={() => window.open('https://keepthefuturehuman.ai/essay/docs/', '_blank')}>
                                    Essay
                                </button>
                                <button 
                                onMouseEnter={() => Schene1_1.preload()}
                                onClick={() => navigate('/play')}>Start Simulation</button>
                            </div>
                        </div>
                    </div>
                )}

                <img className="spashscreen" src={spashscreen} alt="spashscreen" />
                <h1 className='title'>Release Day</h1>
                <p className='description'>
                    An interactive narrative on AI autonomy and the future of human control. 
                    Your choices determine whether humanity remains in charge.
                </p>
                <div className="buttonholder">
                    <button 
                    onMouseEnter={()=>{Schene1_1.preload()}}
                    onClick={() => navigate('/play')}>Start Simulation</button>
                    <button onClick={() => navigate('/credits')}>Credits</button>
                    <button onClick={() => window.open('https://interactive.keepthefuturehuman.ai/', '_blank')}>
                                    Learn More
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;