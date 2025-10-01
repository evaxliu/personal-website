import React from 'react';
import '../styles/About.css'
import Projects from './Projects';
import Experience from './Experience';

function About() {
  return (
    <div className="About">
      <header className="About-header">
        <p>
          About me
        </p>
      </header>
      <div className='About-main'>
        <p>
          I'm Eva Liu!
        </p>
        <p>
          A software engineer who loves building tools that make complex things simpler.
        </p>
        <p>
          I’ve led projects like the Antimony Web Editor, a web app that helps researchers build biological models more easily, and contributed to the Vscode-Antimony extension, supporting over a thousand users.
        </p>
        <p>
          I co-authored a peer-reviewed paper in Bioinformatics about our work improving modeling tools in systems biology.
        </p>
        <p>
          Whether it’s writing full-stack code, speaking at conferences, or building fun side projects like Pet My Dog, I’m all about creating tech that’s useful and thoughtful.
        </p>
      </div>
      <Projects />
      <Experience />
    </div>
  );
}

export default About;