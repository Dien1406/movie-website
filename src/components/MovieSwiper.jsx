import React from "react";
import "./movieSwiper.css";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effec-coverflow";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

function MovieSwiper({ slides }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide>
          <img src={slide.previewImg} alt="Preview Image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;
