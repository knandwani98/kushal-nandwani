import React from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Card = ({ project, setProductImage }) => {
  return (
    <div
      onMouseEnter={() => {
        setProductImage(project.slug);
      }}
      onMouseLeave={() => {
        setProductImage("");
      }}
      className={`card`}
    >
      <div className="flex">
        <a
          target="_blank"
          rel="noreferrer"
          href={project.url}
          className="title"
        >
          {project.title}
        </a>
        <strong className="link">{project.type}</strong>
      </div>
      <hr />
    </div>
  );
};

export default Card;
