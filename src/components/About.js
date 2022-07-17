import React from "react";
import { CgProfile } from "react-icons/cg";
import {GiPositionMarker} from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import {BsGenderMale} from "react-icons/bs";
import {FaSchool} from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="row-main">
        <CgProfile className="content-main_icon" />
        <span className="content-main">Le Ngoc Dai</span>
      </div>
      <div className="row-main">
        <GiPositionMarker className="content-main_icon" />
        <span className="content-main">Bình Định</span>
      </div>
      <div className="row-main">
        <FaBirthdayCake className="content-main_icon" />
        <span className="content-main">08/11/2001</span>
      </div>
      <div className="row-main">
        <BsGenderMale className="content-main_icon" />
        <span className="content-main">Male</span>
      </div>
      <div className="row-main">
        <FaSchool className="content-main_icon" />
        <span className="content-main">Cao Đẳng Công Thương</span>
      </div>
    </>
  );
};

export default About;
