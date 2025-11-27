import { lazy, Suspense, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { preloadImage } from './utils/Image.jsx';
import dvdo from './assets/davidOffice3.png'
import spashscreen from './assets/spashscreen.png';
import owiv from './assets/meeting1.png'
import kpa from './assets/PRESSV2.png'
import escrn from './assets/ASS1.png';
import kppa from './assets/c3i.png'

import ld from './assets/lawsdiscusion.png'
import tn from './assets/tvnews.png'
import CH from './assets/CH.png'
import dummy1 from './assets/introscene.png';
import dummy2 from './assets/dummy3p.png';
import dummy3 from './assets/dummy4.png';
import dummy4 from './assets/nores.png';
import dummy5 from './assets/nocomment.png';

import thisendAA from './assets/ending1.png'

import kpa2_1 from './assets/1b.png';
import kpa2_2 from './assets/ending2AB.png';

import kpaEnd from './assets/ENDING2B.png';
import kpaG from './assets/ENDINGGOLDEN.png';
import kpaCo from './assets/END3_3.png';

import kpa3_1 from './assets/thediscussion.png';
import kpa3_1e from './assets/end33a.png';
import kpa4_1 from './assets/boardroom1.png';

import kpa4e3 from './assets/4_1e3.png';
import kpa4e2 from './assets/4_1e2.png';
import kpa4e1 from './assets/4_1e1.png';

// Preloadable component factory
const createPreloadableComponent = (importFn) => {
  const Component = lazy(importFn);
  Component.preload = importFn;
  return Component;
};

// Preloadable components
const Home = createPreloadableComponent(() => import('./pages/Home.jsx'));
const Schene1_1 = createPreloadableComponent(() => import('./components/choiceA/Schene1-1.jsx'));
const Schene1_2 = createPreloadableComponent(() => import('./components/choiceA/Schene1_2.jsx'));
const Schene1_3 = createPreloadableComponent(() => import('./components/choiceA/Schene1_3.jsx'));
const Schene1_3A = createPreloadableComponent(() => import('./components/choiceA/Schene1_3A.jsx'));
const Schene1_3AB = createPreloadableComponent(() => import('./components/choiceA/Schene1_3AB.jsx'));
const Schene1_3AA = createPreloadableComponent(() => import('./components/choiceA/Schene1_3AA.jsx'));
const Schene1_3AAEnd1 = createPreloadableComponent(() => import('./components/choiceA/Scene1_3AAEnd1.jsx'));
const Schene1_3AAEnd2 = createPreloadableComponent(() => import('./components/choiceA/Scene1_3AAEnd2.jsx'));
const Schene1_3AAEnd3 = createPreloadableComponent(() => import('./components/choiceA/Scene1_3AAEnd3.jsx'));
const Schene2_1 = createPreloadableComponent(() => import('./components/choiceB/Schene2_1.jsx'));
const Schene1_3C = createPreloadableComponent(() => import('./components/choiceA/Schene1_3C.jsx'));
const Schene2_1End2 = createPreloadableComponent(() => import('./components/choiceB/Schene2_1End2.jsx'));
const Schene2_2 = createPreloadableComponent(() => import('./components/choiceB/Schene2_2.jsx'));
const Schene2_2End1 = createPreloadableComponent(() => import('./components/choiceB/Schene2_2End1.jsx'));
const Schene2_2End2 = createPreloadableComponent(() => import('./components/choiceB/Schene2_2End2.jsx'));
const Schene3_1 = createPreloadableComponent(() => import('./components/choiceC/Schene3_1.jsx'));
const Schene3_1End = createPreloadableComponent(() => import('./components/choiceC/Schene3_1End.jsx'));
const Schene4_1 = createPreloadableComponent(() => import('./components/choiceD/Schene4_1.jsx'));
const Schene4_1End = createPreloadableComponent(() => import('./components/choiceD/Schene4_1End.jsx'));
const Schene4_1End2 = createPreloadableComponent(() => import('./components/choiceD/Schene4_1End2.jsx'));
const Schene4_1End3 = createPreloadableComponent(() => import('./components/choiceD/Schene4_1End3.jsx'));
const Credits = createPreloadableComponent(() => import('./pages/Credits.jsx'));
const NotFound = createPreloadableComponent(() => import('./pages/NotFound.jsx'));

// Preloading strategy - KEEP YOUR EXACT STRUCTURE
const preloadMap = {
  '/': {
    components: [Home, Schene1_1],
    images: [dvdo, spashscreen],
  },
  '/play': {
    components: [Schene1_2],
    images: [owiv],
  },
  '/play/1': {
    components: [Schene1_3, Schene2_1, Schene3_1, Schene4_1],
    images: [kpa, kpa2_1, kpa3_1, kpa4_1],
  },
  '/play/1/A': {
    components: [Schene1_3A, Schene1_3C],
    images: [escrn, kppa],
  },
  '/play/1/A/A': {
    components: [Schene1_3AA, Schene1_3AB],
    images: [CH, ld, tn, dummy1, dummy2, dummy3, dummy4, dummy5],
  },
  '/play/1/A/A/A': {
    components: [Schene1_3AAEnd1, Schene1_3AAEnd2, Schene1_3AAEnd3],
    images: [thisendAA],
  },
  '/play/1/B': {
    components: [Schene2_2, Schene2_1End2],
    images: [kpa2_2, kpaEnd],
  },
  '/play/1/B/A': {
    components: [Schene2_2End1, Schene2_2End2],
    images: [kpaG, kpaCo],
  },
  '/play/1/C': {
    components: [Schene3_1End],
    images: [kpa3_1e],
  },
  '/play/1/D': {
    components: [Schene4_1End, Schene4_1End2, Schene4_1End3],
    images: [kpa4e1, kpa4e2, kpa4e3],
  },
};


// Loading component
const RouteLoader = () => (
  <div className="loading-scene">
    <div className="loading-spinner"></div>
  </div>
);

// Page Wrapper with Framer Motion
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: .65,
      }}
      style={{width:'100%' , height:'100%'}}
    >
      {children}
    </motion.div>
  );
};

// Fixed Preload Manager Component
const PreloadManager = ({ children }) => {
  const location = useLocation();
  const preloadTimeoutRef = useRef();

  useEffect(() => {
    const preloadResources = async () => {
      const currentPath = location.pathname;
      const nextSceneData = preloadMap[currentPath];

      if (!nextSceneData) return;

      try {
        // Preload components
        const componentPreloads = nextSceneData.components?.map(component => 
          component.preload?.().catch(error => {
            console.warn(`Preload failed for component:`, error);
          })
        ) || [];

        // Preload images in batches to avoid overwhelming network
        const imagePreloads = nextSceneData.images?.map(imageSrc => 
          preloadImage(imageSrc).catch(error => {
            console.warn(`Preload failed for image: ${imageSrc}`, error);
          })
        ) || [];

        // Wait for all preloads to complete (but don't block rendering)
        await Promise.allSettled([...componentPreloads, ...imagePreloads]);
      } catch (error) {
        console.warn('Preloading failed:', error);
      }
    };

    // Clear any existing timeout
    if (preloadTimeoutRef.current) {
      clearTimeout(preloadTimeoutRef.current);
    }

    // Start preloading after a short delay
    preloadTimeoutRef.current = setTimeout(preloadResources, 50);

    return () => {
      if (preloadTimeoutRef.current) {
        clearTimeout(preloadTimeoutRef.current);
      }
    };
  }, [location.pathname]);

  return children;
};

export default function App() {
  const location = useLocation();

  return (
    <PreloadManager>
      <AnimatePresence mode="wait">
        <Suspense fallback={<RouteLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/play" element={<PageWrapper><Schene1_1 /></PageWrapper>} />
            <Route path="/play/1" element={<PageWrapper><Schene1_2 /></PageWrapper>} />
            <Route path="/play/1/A" element={<PageWrapper><Schene1_3 /></PageWrapper>}/>
            <Route path="/play/1/A/A" element={<PageWrapper><Schene1_3A /></PageWrapper>}/>
            <Route path="/play/1/A/A/A" element={<PageWrapper><Schene1_3AA /></PageWrapper>}/>
            <Route path="/play/1/A/A/B" element={<PageWrapper><Schene1_3AB /></PageWrapper>}/>
            <Route path="/play/1/A/EndC" element={<PageWrapper><Schene1_3C /></PageWrapper>}/>
            <Route path="/play/1/A/A/A/End1" element={<PageWrapper><Schene1_3AAEnd1 /></PageWrapper>}/>
            <Route path="/play/1/A/A/A/End2" element={<PageWrapper><Schene1_3AAEnd2 /></PageWrapper>}/>
            <Route path="/play/1/A/A/A/End3" element={<PageWrapper><Schene1_3AAEnd3 /></PageWrapper>}/>
            <Route path="/play/1/B" element={<PageWrapper><Schene2_1 /></PageWrapper>}/>
            <Route path="/play/1/B/A" element={<PageWrapper><Schene2_2 /></PageWrapper>}/>
            <Route path="/play/1/B/A/End1" element={<PageWrapper><Schene2_2End1 /></PageWrapper>}/>
            <Route path="/play/1/B/B/End2" element={<PageWrapper><Schene2_2End2 /></PageWrapper>}/>
            <Route path="/play/1/B/End2" element={<PageWrapper><Schene2_1End2 /></PageWrapper>}/>
            <Route path="/play/1/C" element={<PageWrapper><Schene3_1 /></PageWrapper>}/>
            <Route path="/play/1/C/End" element={<PageWrapper><Schene3_1End /></PageWrapper>}/>
            <Route path="/play/1/D" element={<PageWrapper><Schene4_1 /></PageWrapper>}/>
            <Route path="/play/1/D/End" element={<PageWrapper><Schene4_1End /></PageWrapper>}/>
            <Route path="/play/1/D/End2" element={<PageWrapper><Schene4_1End2 /></PageWrapper>}/>
            <Route path="/play/1/D/End3" element={<PageWrapper><Schene4_1End3 /></PageWrapper>}/>
            <Route path="/credits" element={<PageWrapper><Credits /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </PreloadManager>
  );
}