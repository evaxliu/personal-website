import './styles/App.css';
import { LofiRoom } from './components/LofiRoom';
import About from './pages/About';
import { motion } from 'framer-motion';
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
          <div className='wrapper'>
            <div id='lofi-room'>
              <LofiRoom />
            </div>
            {(
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
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
