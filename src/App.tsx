import './styles/App.css';
import React, { useState } from 'react';
import { LofiRoom } from './components/LofiRoom';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import { motion } from 'framer-motion';
// import { ProjectBox } from './components/ProjectBox';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

function App() {
  const [ component, setComponent ] = useState('');

  const handleToggleHome = () => {
    setComponent('')
  }

  const handleToggleAbout = () => {
    setComponent('about')
  }

  const handleToggleProjects = () => {
    setComponent('project')
  }

  const handleToggleExperience = () => {
    setComponent('experience')
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Eva Liu's Space
        </p>
        <main>
          <nav>
            <button onClick={handleToggleHome}>
              Home
            </button>
            <button onClick={handleToggleAbout}>
              About
            </button>
            <button onClick={handleToggleExperience}>
              Experience
            </button>
            <button onClick={handleToggleProjects}>
              Projects
            </button>
          </nav>
          <div className='wrapper'>
            <div id='lofi-room'>
              <LofiRoom />
            </div>
            {component === "about" && (
              <motion.div
                key="about"
                className="about-motion-wrapper"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <About />
              </motion.div>
            )}

            {component === 'project' && (
              <motion.div
                key="projects"
                className="proj-motion-wrapper"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <Projects />
              </motion.div>
            )}

            {component === "experience" && (
              <motion.div
                key="experience"
                className="exp-motion-wrapper"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <Experience />
              </motion.div>
            )}          
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
