import React, { useContext } from "react";
import "./Works.css";
import Goignis from "../../img/Goignis1.png";
import Fiverr from "../../img/fiverr.png";
import Hackerhsla from "../../img/Hackershala.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Goigins- Full-Stack Web Developer- Created the whole website from scratch 
            <br /><br />
           Hackershala- Full-Stack Web Developer- Created the React admin panel.
            <br /><br />
           Shopify Freelance work
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 360 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 10, type: "spring" }}
          className="w-mainCircle"
        >
          <div></div>
          <div className="w-secCircle">
            <img src={Goignis} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Hackerhsla} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div></div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
