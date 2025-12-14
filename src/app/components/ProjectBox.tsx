import '../styles/ProjectBox.css'
import React from 'react';

export const ProjectBox = () => {
  return (
    <div className="ProjectBox">
      <article className='Project-info'>
        <h5>Project Title</h5>
        <p> Description </p>
        <a href="url">Project Link</a>
      </article>
    </div>
  );
}