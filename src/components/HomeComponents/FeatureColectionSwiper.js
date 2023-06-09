import React, { useRef } from "react";
import Container from "../Container";
import ProductCard from "../ProductCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper";
import { useMediaQuery } from "usehooks-ts";
import SwiperButton from "./SwiperButton";
import classNames from "classnames";
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
    slidesPerView: 6,
  },
};
function FeatureColectionSwiper() {
  const matches = useMediaQuery("(min-width: 720px)");
  return (
    <Container class1="featured-wrapper py-5 home-wrapper-2">
      <Swiper
        navigation
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={swiperBreakPoints}
        spaceBetween={matches ? 20 : 10}
        slidesPerView={3}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        className={classNames(
          "!flex flex-col-reverse",
          matches
            ? "w-[calc(100%+20px)] h-[calc(100%+20px)] -translate-x-[10px] -translate-y-[10px] !p-[10px] "
            : "w-[calc(100%+10px)] h-[calc(100%+10px)] -translate-x-[5px] -translate-y-[5px] !p-[5px] "
        )}
      >
        <div className="flex justify-between ">
          <h2 className="section-title">Featured Collection</h2>
          <div className="flex">
            <SwiperButton type="prev" clName="p-2 rounded-sm">
              <span aria-label="Previous"></span>
            </SwiperButton>
            <SwiperButton type="next" clName="p-2 rounded-sm">
              <span aria-label="Next"></span>
            </SwiperButton>
          </div>
        </div>

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
