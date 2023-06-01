import classNames from "classnames";
import React from "react";
import { useSwiper } from "swiper/react";

function SwiperButton({ type, clName, children }) {
  const swiper = useSwiper();
  const handleClick = () => {
    if (type === "next") {
      swiper.slideNext();
    } else swiper.slidePrev();
  };
  return (
    <div
      onClick={handleClick}
      className={classNames(
        clName,
        type === "next" ? "swiper-next" : "swiper-prev"
      )}
    >
      {children}
    </div>
  );
}

export default SwiperButton;
