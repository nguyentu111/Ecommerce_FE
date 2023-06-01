import React from "react";
import Container from "../Container";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { collection_cards } from "../../utils/Data";
import { Link } from "react-router-dom";
const swiperBreakPoints = {
  1: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 2,
  },
  660: {
    slidesPerView: 3,
  },
  1300: {
    slidesPerView: 5,
  },
};
function CollectionSwiper() {
  return (
    <Container class1="home-wrapper-2">
      <div className="card-wrapper bg-white rounded-xl ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={swiperBreakPoints}
          spaceBetween={0}
          slidesPerView={3}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          {collection_cards.map((item, i) => {
            if (i % 2 === 1) return null;
            return (
              <SwiperSlide key={i}>
                <Link
                  to={item.link}
                  className="flex justify-between group hover:text-black"
                >
                  <div className="my-auto pt-[10px] pl-[22px]">
                    <h3 className="font-bold text-[14px] md:text-[16px] mb-2 group-hover:underline">
                      {collection_cards[i]?.title}
                    </h3>
                    <h3 className="text-gray-400 text-[13px]">
                      {collection_cards[i]?.num + " items"}
                    </h3>
                  </div>
                  <img
                    src={collection_cards[i]?.img}
                    alt="colection_img"
                    className="w-[70px] mr-2 md:mr-4 lg:w-[90px]"
                  />
                </Link>
                <Link
                  to={item.link}
                  className="flex justify-between group hover:text-black"
                >
                  <div className="my-auto  pt-[10px] pl-[22px]">
                    <h3 className="font-bold text-[14px] md:text-[16px] mb-2 group-hover:underline">
                      {collection_cards[i + 1]?.title}
                    </h3>
                    <h3 className="text-gray-400 text-[13px]">
                      {collection_cards[i + 1]?.num + " items"}
                    </h3>
                  </div>
                  <img
                    src={collection_cards[i + 1]?.img}
                    alt="colection_img"
                    className="w-[70px] mr-2 md:mr-4 lg:w-[90px]"
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
}

export default CollectionSwiper;
