import React from "react";
import img from "../asset/project.png";
const Project = () => {
  return (
    <div className="w-full">
      <div className=" relative w-full h-16">
        <a
          href="https://animev2.vercel.app"
          target="_blank"
          className=" my-2 dark:text-white font-medium"
          rel="noreferrer"
        >
          https://animev2.vercel.app
        </a>
      </div>
      <div className="w-full h-[720px] mt-10 my-6 border-4  rounded-2xl">
        <iframe
          src="https://animev2.vercel.app/"
          title="animev2"
          className="w-full rounded-md h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Project;
