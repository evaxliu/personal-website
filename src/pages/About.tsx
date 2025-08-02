import React from 'react';
import '../styles/About.css'

function About() {
  return (
    <div className="About">
      <header className="About-header">
        <p>
          Hi!
        </p>
      </header>
      <div>
        <p>
          I'm Eva Liu!
          <br/>
          A software engineer who loves building tools that make complex things simpler. I’ve led projects like the Antimony Web Editor, a web app that helps researchers build biological models more easily, and contributed to the Vscode-Antimony extension, now used by over a thousand people. I co-authored a peer-reviewed paper in Bioinformatics about our work improving modeling tools in systems biology. Whether it’s writing full-stack code, speaking at conferences, or building fun side projects like Pet My Dog, I’m all about creating tech that’s useful and thoughtful.
        </p>
      </div>
    </div>
  );
}

export default About;