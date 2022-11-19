import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Pagination, Navigation, Autoplay } from "swiper";

import COURSES from "./data/QUALIFICATIONS.json";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./data/COURSES', false, /\.(png|jpe?g|svg)$/));
console.log(images)


export default function QUALIFICATIONS() {

    let EDUCATION_DATA = require('./data/EDUCATION.json');
    return (
      <>
      <div className="QUALIFICATIONS-INTRO" id="QUALIFICATIONS_ID">QUALIFICATIONS</div>
      <div className="qualifications_slider">
          <Swiper
                breakpoints={{
                  900: {
                    slidesPerView: 3,
                    spaceBetween:30,
                  },
                }}
            slidesPerView={3}
            spaceBetween={5}
            slidesPerGroup={1}
            loop={true}
            grabCursor={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2100,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {COURSES.ALL.map (THINGS =>(
                <div>
                  <SwiperSlide>
                    <div className="slide-content-qualifications">
                     <img src={images[THINGS.photo]} className="COURSE-PHOTO"></img>
                      <div className="Card-Qualification-Name">
                        <h2 className="COURSE_TITLE">{THINGS.Course_Title}</h2>
                        <button  className="button QUALIFICATION_BUTTON" >
                          <a href={THINGS.link} className="CERTIFICATE_LINK"> CERTIFICATE</a>
                          </button>
                        <h2 className="QUALIFICATION_SPEC"> {THINGS.Specification}</h2>
                        
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
  