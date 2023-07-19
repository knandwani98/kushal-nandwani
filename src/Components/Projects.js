import React, { useState, useEffect } from "react";
import data from "../data.json";
import "../styles/project.scss";
import Card from "./Card";

const Projects = ({ theme }) => {
  const [productImage, setProductImage] = useState("");

  return (
    <section className={`projects ${theme}-mode`}>
      <br />
      <br />

      <div className="cards grid">
        <div className="preview">
          <img
            src={productImage ? `../projects/${productImage}.png` : ""}
            className={productImage && "active"}
            alt={productImage}
          />
        </div>
        <div className="list-container">
          <header>
            <h1>Projects</h1>
            <hr style={{ borderColor: " var(--orange" }} />
          </header>

          <div className="grid lists">
            <br />
            <br />
            <br />
            <br />
            {data.projects.map((project, i) => {
              return (
                <Card
                  key={i}
                  setProductImage={setProductImage}
                  project={project}
                />
              );
            })}
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
