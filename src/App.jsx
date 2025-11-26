import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';

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

// Preloading strategy
const preloadNextScenes = (currentPath) => {
  const preloadMap = {
    '/': [Home, Schene1_1],
    '/play': [Schene1_2],
    '/play/1': [Schene1_3, Schene2_1, Schene3_1, Schene4_1],
    '/play/1/A': [Schene1_3A, Schene1_3C],
    '/play/1/A/A': [Schene1_3AA, Schene1_3AB],
    '/play/1/A/A/A': [Schene1_3AAEnd1, Schene1_3AAEnd2, Schene1_3AAEnd3],
    '/play/1/B': [Schene2_2, Schene2_1End2],
    '/play/1/B/A': [Schene2_2End1, Schene2_2End2],
    '/play/1/C': [Schene3_1End],
    '/play/1/D': [Schene4_1End, Schene4_1End2, Schene4_1End3],
  };

  const scenesToPreload = preloadMap[currentPath] || [];
  
  scenesToPreload.forEach(component => {
    if (component.preload) {
      component.preload().catch(error => {
        console.warn(`Preload failed for component at ${currentPath}:`, error);
      });
    }
  });
};

// Loading component
const RouteLoader = () => (
  <div className="loading-scene">
    <div className="loading-spinner"></div>
  </div>
);

// Preload Manager Component
const PreloadManager = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Preload scenes for current location
    preloadNextScenes(location.pathname);
    
    // Also preload common routes
    Credits.preload?.().catch(() => {});
    NotFound.preload?.().catch(() => {});
  }, [location.pathname]);

  return children;
};

export default function App() {
  return (
    <PreloadManager>
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Schene1_1 />} />
          <Route path="/play/1" element={<Schene1_2 />} />
          <Route path="/play/1/A" element={<Schene1_3 />}/>
          <Route path="/play/1/A/A" element={<Schene1_3A />}/>
          <Route path="/play/1/A/A/A" element={<Schene1_3AA />}/>
          <Route path="/play/1/A/A/B" element={<Schene1_3AB />}/>
          <Route path="/play/1/A/EndC" element={<Schene1_3C/>}/>
          <Route path="/play/1/A/A/A/End1" element={<Schene1_3AAEnd1/>}/>
          <Route path="/play/1/A/A/A/End2" element={<Schene1_3AAEnd2/>}/>
          <Route path="/play/1/A/A/A/End3" element={<Schene1_3AAEnd3/>}/>
          <Route path="/play/1/B" element={<Schene2_1 />}/>
          <Route path="/play/1/B/A" element={<Schene2_2 />}/>
          <Route path="/play/1/B/A/End1" element={<Schene2_2End1 />}/>
          <Route path="/play/1/B/B/End2" element={<Schene2_2End2 />}/>
          <Route path="/play/1/B/End2" element={<Schene2_1End2 />}/>
          <Route path="/play/1/C" element={<Schene3_1 />}/>
          <Route path="/play/1/C/End" element={<Schene3_1End />}/>
          <Route path="/play/1/D" element={<Schene4_1/>}/>
          <Route path="/play/1/D/End" element={<Schene4_1End/>}/>
          <Route path="/play/1/D/End2" element={<Schene4_1End2/>}/>
          <Route path="/play/1/D/End3" element={<Schene4_1End3/>}/>
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PreloadManager>
  );
}