import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";


const MainVisual = () => {
  return (
    <div className='MainVisual'>
      <h2>시즌 오프 세일 – 최대 40% 할인에 아디클럽 추가 30% 할인 + 전 제품 무료 배송 (~2/5)구매하기</h2>
<div className='MainVisual_inner'>
      <Swiper className="mySwiper"
      autoplay={{ delay: 2000}}
      loop={true}
      >
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + './Img/main1.png'}/>
        </SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + './Img/main2.png'}/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + './Img/main3.png'}/></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + './Img/main4.png'}/></SwiperSlide>
      </Swiper>
      </div>
    </div>
    
  )
}

export default MainVisual