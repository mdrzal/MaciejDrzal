import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Pagination, Navigation } from "swiper";

import EDUCATION_DATA from "./data/EDUCATION.json";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./data/UNI', false, /\.(png|jpe?g|svg)$/));


console.log(window.screen.height)


export default function EDUCATION() {

  let EDUCATION_DATA = require('./data/EDUCATION.json');
  return (
    <>
    <div className="EDUCATION-INTRO" id="EDUCATION_ID">EDUCATION</div>
    <div className="education_slider" id="EDUCATION_SLIDER">
        <Swiper 
      breakpoints={{
        900: {
          slidesPerView: 3,
          spaceBetween:30,
        },
      }}
          slidesPerView={3}
          spaceBetween={5}
          slidesPerGroup={3}
          loop={true}
          grabCursor={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[ Navigation]}
          className="mySwiper"
        >
          {EDUCATION_DATA.ALL.map (THINGS =>(
              <div>
                <SwiperSlide className="TESTING">
                  <div className="slide-content">
                   <img src={images[THINGS.photo]} className="UNI-PHOTO"></img>
                    <div className="Card-Uni-Name">
                      <h2 className="UNI_NAME">{THINGS.University}</h2>
                      <h2 className="DEGREE_SPEC"> {THINGS.Specification}</h2>
                      <h2 className="DEGREE_NAME">Degree Level: {THINGS.Degree}</h2>
                    </div>
                  </div>

                  

                </SwiperSlide>
              </div>
            ))}
          
        </Swiper>
      </div>
      
    </>
  );
}
