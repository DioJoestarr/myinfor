import React from "react";
import { FaReact } from "react-icons/fa";
import { DiCss3, DiNodejsSmall } from "react-icons/di";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
const Skills = () => {
  return (
    <div className="flex mt-4 w-full items-center justify-between flex-wrap">
      <div className="col-skill">
        <AiFillHtml5 className="content-skill_icon" />
        <div className="content-skill_text">HTML</div>
      </div>
      <div className="col-skill">
        <DiCss3 className="content-skill_icon" />
        <div className="content-skill_text">CSS</div>
      </div>
      <div className="col-skill">
        <SiTailwindcss className="content-skill_icon" />
        <div className="content-skill_text">TailwindCSS</div>
      </div>
      <div className="col-skill">
        <SiJavascript className="content-skill_icon" />
        <div className="content-skill_text">Javascipt</div>
      </div>
      <div className="col-skill">
        <SiTypescript className="content-skill_icon" />
        <div className="content-skill_text">TypeScript</div>
      </div>
      <div className="col-skill">
        <DiNodejsSmall className="content-skill_icon" />
        <div className="content-skill_text">NodeJS</div>
      </div>
      <div className="col-skill">
        <FaReact className="content-skill_icon" />
        <div className="content-skill_text">React</div>
      </div>
      <div className="col-skill">
        <TbBrandNextjs className="content-skill_icon" />
        <div className="content-skill_text">NextJS</div>
      </div>
    </div>
  );
};

export default Skills;
