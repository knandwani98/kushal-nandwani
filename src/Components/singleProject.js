import React from "react";

const singleProject = () => {
  return (
    <>
      <strong>2023</strong>

      <br />
      <p>{project.description}</p>
      <br />
      <br />
      <br />
      <div className="tabs flex">
        {project.url && (
          <a
            href={project.url}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo ↗️
          </a>
        )}

        {project.source && (
          <a
            href={project.source}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source ↗️
          </a>
        )}

        {project.article && (
          <a
            href={project.article}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Article
          </a>
        )}
      </div>
    </>
  );
};

export default singleProject;
