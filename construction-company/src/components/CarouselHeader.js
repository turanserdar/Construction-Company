import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';

import "swiper/css";
import "./CarouselHeader.css";
import "swiper/css/navigation"

export const CarouselHeader = () => {
  return (
    <div className='h-[1200px] bg-white'>
      <Swiper 
       loop={true}
       spaceBetween={0}
       navigation={true}
       modules={[Navigation,Autoplay]}
       autoplay={{
         delay: 4500  // images automatically play 4500 miliseconds delay
       }}
       className='h-[50%]'
      >
        {Array.from({ length: 4 }, (_, i) => (
          <SwiperSlide key={i} className="slide-content">
            <img src={`../images/header-carousel-${i}.jpg`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='h-[1%] bg-gradient-to-b from-stone-900'/>

    </div>
  );
};
