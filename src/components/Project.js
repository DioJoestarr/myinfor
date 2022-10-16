import React from "react";
import img from "../asset/project.png";
const Project = () => {
  return (
    <>
      <div className="project-container"></div>
      <div className="w-full project">
        <a
          href="https://animev2.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <iframe src="https://animev2.vercel.app/" title="animev2" className="w-full h-[720px]"></iframe>

        </a>
      </div>
    </>
  );
};

export default Project;
