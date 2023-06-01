import React from "react";
import Container from "../Container";
import SpecialProduct from "../SpecialProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "./SwiperButton";
import classNames from "classnames";
import { useMediaQuery } from "usehooks-ts";
import { Autoplay } from "swiper";
const swiperBreakPoints = {
  1: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 1,
  },
  660: {
    slidesPerView: 2,
  },
  970: {
    slidesPerView: 2,
  },
  1300: {
    slidesPerView: 3,
  },
};
function SpecialProductSwiper() {
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
            <SpecialProduct />
            <SpecialProduct />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default SpecialProductSwiper;
