import './styles/App.css';
import React, { useState } from 'react';
import { LofiRoom } from './components/LofiRoom';
import About from './pages/About';
// import { ProjectBox } from './components/ProjectBox';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

function App() {
  const [ showHide, setShowHide ] = useState(false);

  const handleToggle = () => {
    setShowHide(!showHide)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Eva Liu's Space
        </p>
        <main>
          <nav>
            <button onClick={handleToggle}>
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
            {showHide && (<About />)}
          </div>
          {/* <div id='project'>
            <ProjectBox />
          </div> */}
        </main>
      </header>
    </div>
  );
}

export default App;
