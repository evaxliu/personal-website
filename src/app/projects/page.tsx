import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <header className="Projects-header">
        <p>Projects</p>
      </header>

      <div className="Projects-main">
        {/* Personal Website */}
        <p className="proj-company"><strong>Personal Website</strong> <span className="proj-date">July 2025 – Present</span></p>
        <p><a href="https://github.com/evaxliu/personal-website" target="_blank" rel="noopener noreferrer">github.com/evaxliu/personal-website</a></p>
        <ul className="proj-list">
          <li>Developing a personal website leveraging React and Three.js to render a custom 3D Blender model.</li>
        </ul>

        <div className="proj-divider" />

        {/* Antimony Web Editor */}
        <p className="proj-company"><strong>Antimony Web Editor</strong> <span className="proj-date">July 2023 – September 2024</span></p>
        <p><a href="https://github.com/sys-bio/AntimonyEditor" target="_blank" rel="noopener noreferrer">github.com/sys-bio/AntimonyEditor</a></p>
        <ul className="proj-list">
          <li>Developed web-based language support for the Antimony modeling language to revolutionize Systems Biology model building using React + TypeScript integrating the Monaco Editor package.</li>
          <li>Launched beta with key features like syntax coloring and hover info for accurate model creation.</li>
        </ul>

        <div className="proj-divider" />

        {/* Vscode-Antimony Extension */}
        <p className="proj-company"><strong>Vscode-Antimony Extension</strong> <span className="proj-date">July 2022 – August 2023</span></p>
        <p><a href="https://github.com/sys-bio/vscode-antimony" target="_blank" rel="noopener noreferrer">github.com/sys-bio/vscode-antimony</a></p>
        <ul className="proj-list">
          <li>Developed features for a VSCode extension enabling Antimony language support to streamline Systems Biology model creation.</li>
          <li>Built an automated installation workflow using Python and TypeScript, streamlining setup for users.</li>
          <li>Added visual indicators for annotated variables to improve model readability.</li>
          <li>Enabled dynamic Rate Law display and insertion via VSCode APIs, reducing manual modeling effort.</li>
        </ul>

        <div className="proj-divider" />

        {/* Pet My Dog */}
        <p className="proj-company"><strong>Pet My Dog</strong> <span className="proj-date">March 2022 – June 2022</span></p>
        <p><a href="https://github.com/evaliu2002/PetMyDog" target="_blank" rel="noopener noreferrer">github.com/evaliu2002/PetMyDog</a></p>
        <ul className="proj-list">
          <li>Designed and developed a multi-page React web application enabling dog owners to broadcast their real-time location and connect with nearby users for in-person dog petting opportunities.</li>
          <li>Collaborated with a team to implement real-time location tracking, intuitive user interfaces and interaction features, and managed design iterations based on feedback to enhance overall user experience.</li>
          <li>Developed robust features to retrieve user input, validate and process data, and store user information in a backend database.</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
