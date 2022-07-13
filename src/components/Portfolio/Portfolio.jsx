import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/ExpenseTracker121.jpeg";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        
        <SwiperSlide>
          <a href="https://meek-sprite-ed648a.netlify.app/" target="_blank">
            {" "}
            <img id="expense" src={Sidebar} alt="Exepnse-Tracker" />
          </a>
          <h1 >Expense-Tracker</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.miclonebydilip.live/" target="_blank">
            <img src={Ecommerce} alt="Mi-Clone" />
          </a>
          <h1 >Mi-Clone</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Dilipsinghal66/chatapp" target="_blank">
            <img src={MusicApp} alt="Chat-App" />
          </a>
          <h1 >Chat-App</h1>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/Dilipsinghal66/Todo-" target="_blank">
          <img src={HOC} alt="ToDo-List" /></a>
          <h1 >ToDo-List</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
