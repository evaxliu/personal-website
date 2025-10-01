import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className="Experience">
      <header className="Experience-header">
        <p>Work Experience</p>
      </header>

      <div className="Experience-main">
        <p className="exp-company"><strong>Center for Reproducible Biomedical Modeling – Seattle, WA</strong></p>

        <p className="exp-role"><strong>Software Engineer Lead / Consultant</strong></p>
        <p className="exp-date"><em>September 2023 – December 2024</em></p>
        <ul className="exp-list">
          <li>Led the design, development, and maintenance of Antimony Web Editor, managing project timelines and fostering a collaborative team environment through regular progress meetings to ensure timely, budget-conscious delivery and effective problem-solving.</li>
          <li>Presented on Antimony Web Editor at the HARMONY conference.</li>
          <li>Implemented robust testing procedures to ensure software reliability and functionality, while developing comprehensive documentation for development workflows, user guides, and troubleshooting resources.</li>
        </ul>

        <div className="exp-divider" />

        <p className="exp-role"><strong>Software Engineer</strong></p>
        <p className="exp-date"><em>July 2022 – September 2023</em></p>
        <ul className="exp-list">
          <li>Developed full-stack features for the Antimony modeling language’s VSCode extension, <strong>Vscode-Antimony</strong>, serving 1,000+ users on the VS Code Marketplace using TypeScript, Python, Shell, and JSON.</li>
          <li>Presented on Vscode-Antimony at the COMBINE conference.</li>
          <li>Co-authored a peer-reviewed publication in <em>Bioinformatics</em> (Oxford University Press) detailing the extension’s design and impact. (<a href="https://doi.org/10.1093/bioinformatics/btad753" target="_blank" rel="noopener noreferrer">doi.org/10.1093/bioinformatics/btad753</a>)</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
