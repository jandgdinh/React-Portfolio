import React from 'react';
import './Project.css'; // Assuming you have a CSS file for styling

function Project({ title, image, description, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}
export default Project;