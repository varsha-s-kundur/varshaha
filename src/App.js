import './App.scss';

import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/navBar';
// import Particles from "react-tsparticles";
// import { loadFull } from 'tsparticles';

import Home from './containers/home';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Projects from './containers/projects';
import Contact from './containers/contact';
import About from './containers/about';
import Skills from './containers/skills';
// import particles from "./utils.js/particles.js";

// ✅ Import Iridescence background
import Iridescence from './components/Iridescence/Iridescence';

function App() {
  const location = useLocation();
  console.log(location);

  // const renderparticlesJsInHomePage = location.pathname === "/";
  // const handleInit = async (main) => {
  //   await loadFull(main);
  // };

  return (
    <div className="App">
      {/* ✅ Iridescence background */}
      <Iridescence
        color={[0.5, 0.6, 0.8]}   // Customize RGB values
        speed={1.0}               // Animation speed
        amplitude={0.1}           // Mouse distortion strength
        mouseReact={true}         // Enable mouse interaction
      />

      {/* particles.js only on homepage (currently disabled) */}
      {/*
        renderparticlesJsInHomePage &&
        <Particles id='particles' options={particles} init={handleInit} />
      */}

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <div className="App__main-page-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
