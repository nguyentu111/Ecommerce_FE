import React from "react";
import Container from "../Container";
import BlogCard from "../BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "./SwiperButton";
import { Autoplay } from "swiper";
import classNames from "classnames";
const swiperBreakPoints = {
  1: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 2,
  },
  660: {
    slidesPerView: 2,
  },
  990: {
    slidesPerView: 3,
  },
  1300: {
    slidesPerView: 4,
  },
};
function LastestBlog() {
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
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        className={classNames(
          "!flex flex-col-reverse",
          "w-[calc(100%+20px)] h-[calc(100%+20px)] -translate-x-[10px] -translate-y-[10px] !p-[10px] "
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
            <BlogCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default LastestBlog;
