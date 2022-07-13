import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>singhaldilip66@gmail.com</span>
        <div className="f-icons">
          <div className="i-icons1">
            <a href="https://github.com/Dilipsinghal66" target="_blank">
              <img src={Github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/dilip-singhal/"
              target="_blank"
            >
              <img src={LinkedIn} alt="" />
            </a>

            <a href="https://github.com/Dilipsinghal66" target="_blank">
              {" "}
              <img src={Instagram} alt="" />{" "}
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
