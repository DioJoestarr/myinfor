import React from "react";
import { CgProfile } from "react-icons/cg";
import { GiPositionMarker } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaSchool } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="row-main">
        <BsFacebook className="content-main_icon" />
        <a
          href="https://www.facebook.com/dai.xk.1/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="content-main link-profile">Lê Đài</span>
        </a>
      </div>
    </>
  );
};

export default Contact;
