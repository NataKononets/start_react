import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ImageRow({
  posters,
  onPosterClick,
  onSwiperReady, 
}) {
  return (
    <div className="image-row mt-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={8}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        onSwiper={onSwiperReady} 
      >
        {posters.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Poster ${i}`}
              className="poster"
              onClick={() => onPosterClick?.(i)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}