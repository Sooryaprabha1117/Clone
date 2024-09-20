// src/components/SwiperComponent.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import './SwiperComponent.css'; // Import the CSS file

import myImage1 from "../asset/14.jpg";
import myImage2 from "../asset/15.png";
import myImage3 from "../asset/17.jpg";
import myImage4 from "../asset/20.jpg";
import myImage5 from "../asset/21.jpg";
import myImage6 from "../asset/3.jpg";
import myImage7 from "../asset/bltzwork.jpeg";
import myImage8 from "../asset/6.jpg";
import myImage9 from "../asset/22.jpg";
const SwiperComponent = () => {
  return (
    <div className="swiper-container">
      <Swiper
        loop={true}
        spaceBetween={16}
        slidesPerView={'auto'}
        autoplay={{
          delay: 2500, // Time in milliseconds between slides
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        modules={[Pagination, Navigation, Autoplay]} // Use the modules
        className="mySwiper"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide className="swiper-slide"> <img src={myImage5} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage7} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage3} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage4} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage5} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage6} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage7} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage1} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage2} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage3} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage4} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage5} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage6} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage7} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage8} alt="Descriptive alt text" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"> <img src={myImage9} alt="Descriptive alt text" /></SwiperSlide>

        {/* Navigation buttons */}
       
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
