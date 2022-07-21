import React from "react";
import { nanoid } from 'nanoid';

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map((technology) => <span key = {nanoid(5)}>{technology}</span>)}
      </div>
    </div>
  );
}

export default ProjectItem;
