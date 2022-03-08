import "./index.scss"
import photo1 from "../Assets/Rectangle 23.png"
import photo2 from "../Assets/Rectangle 24.png"
import photo3 from "../Assets/Rectangle 25.png"
import photo4 from "../Assets/Rectangle 26.png"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const Card = () => {
    return(
       <div className="divcrd">
           <p className="recomended"><b>Recomended for you</b></p>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide><img className="photo1" src={photo1}/></SwiperSlide>
        <SwiperSlide><img className="photo2" src={photo2}/></SwiperSlide>
        <SwiperSlide><img className="photo3" src={photo3}/></SwiperSlide>
        <SwiperSlide><img className="photo4" src={photo4}/></SwiperSlide>
      </Swiper>
            </div>
    )
}

export default Card