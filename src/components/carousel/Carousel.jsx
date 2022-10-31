import React from 'react'
import './carousel.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css';
import glovo from "../../assets/images/glovo.svg";


const Carousel = () => {
  return (
    <>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide><img src={glovo}/></SwiperSlide>
      <SwiperSlide><img src={glovo}/></SwiperSlide>
      <SwiperSlide><img src={glovo}/></SwiperSlide>
    </Swiper>
  </>
  )
}

export default Carousel