import './styles/App.css';
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LofiRoom } from './components/LofiRoom';
import About from './pages/About';
// import { ProjectBox } from './components/ProjectBox';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Eva Liu's Space
        </p>
        <main>
          <nav>
            <button>
              About
            </button>
            <button>
              Experience
            </button>
            <button>
              Projects
            </button>
          </nav>
          <div className='wrapper'>
            <div id='lofi-room'>
              <LofiRoom />
            </div>
            <div id='about'>
              <About />
            </div>
          </div>
          {/* <div id='project'>
            <ProjectBox />
          </div> */}
        </main>
        {/* <Router>
          <Routes>
            <Route path="/" element={<LofiRoom />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router> */}
      </header>
    </div>
  );
}

export default App;
