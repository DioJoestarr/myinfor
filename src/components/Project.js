import React from "react";
import img from "../asset/Untitled.png";
const Project = () => {
  return (
    <>
      <div className="project-container"></div>
      <div className="w-full project">
        <a
          href="https://daiphim.vercel.app/home"
          target="_blank"
          rel="noreferrer"
        >
          <img src={img} className="" alt="" />
        </a>
      </div>
    </>
  );
};

export default Project;
