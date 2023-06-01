import React from "react";
import Container from "../Container";
import ProductCard from "../ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useMediaQuery } from "usehooks-ts";
const swiperBreakPoints = {
  1: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 2,
  },
  660: {
    slidesPerView: 3,
  },
  970: {
    slidesPerView: 4,
  },
  1300: {
    slidesPerView: 5,
  },
};
function FeatureColectionSwiper() {
  const matches = useMediaQuery("(min-width: 720px)");
  return (
    <Container class1="featured-wrapper py-5 home-wrapper-2">
      <h2 className="text-xl font-bold mb-4">Featured Collection</h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        lazy
        breakpoints={swiperBreakPoints}
        spaceBetween={matches ? 20 : 10}
        slidesPerView={3}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        className={
          matches
            ? "w-[calc(100%+20px)] h-[calc(100%+20px)] -translate-x-[10px] -translate-y-[10px] !p-[10px] "
            : "w-[calc(100%+10px)] h-[calc(100%+10px)] -translate-x-[5px] -translate-y-[5px] !p-[5px] "
        }
      >
        {Array.from({ length: 10 }).map((v, i) => (
          <SwiperSlide key={i}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default FeatureColectionSwiper;
