import React from "react";
import './Clarin.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Maze from "../../assets/images/maze.png";
import zgarbi from "../../assets/images/zgarbi.png"

const Clarin = () => {
    return(
        <div className="back">
            <div className="backcolor">

    <>
    <Swiper pagination={true} modules={[Pagination]} className="swp">
      <SwiperSlide><img src={Maze}/></SwiperSlide>
      <SwiperSlide><img src={Maze}/></SwiperSlide>
      <SwiperSlide><img src={Maze}/></SwiperSlide>
    </Swiper>
  </>
                <div className="mega">
                <h1 className="name_1">Clarins</h1>
                <p className="procent">-30%</p>
                <div className="bott_1">
                    <p className="suggest">შემოთავაზება</p>
                </div>
                </div>
            </div>
            <div className="backs_1">
                <img className="gift" alt="a gift" src={zgarbi} />
                <p className="text_deco">დააგროვე ქულები და მიიღე მეტი შემოთავაზებები!</p>
                <div className="bott">
                    <p>გახსენი ბარათი</p>
                </div>
            </div>
        </div>
    )
}

export default Clarin