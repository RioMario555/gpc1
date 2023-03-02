import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import glovo from "../../assets/images/glovo.svg";

const Carousel = () => {
  return (
    <div className="glovo_carousel">
      <>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src={glovo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={glovo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={glovo} />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
