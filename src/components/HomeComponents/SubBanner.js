import { Autoplay } from "swiper";
import Container from "../Container";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";
import { useMediaQuery } from "usehooks-ts";
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
  970: {
    slidesPerView: 4,
  },
  1300: {
    slidesPerView: 4,
  },
};
const data = [
  {
    label: "big screen",
    subtitle: "Smart Watch Series 7",
    title: "From $399 or $16.62/mo.*",
    img: "images/famous-1.jpg",
    link: "/product/:id",
  },
  {
    label: "studio display",
    subtitle: "600 nits of brightness",
    title: "27 inch 5K Retina display",
    img: "images/famous-2.jpg",
    link: "/product/:id",
  },
  {
    label: "smartphones",
    subtitle: "Smartphone 13 Pro.",
    title: "Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote",
    img: "images/famous-3.jpg",
    link: "/product/:id",
  },
  {
    label: "home speakers",
    subtitle: "Room-filling sound.",
    title: "From $699 or $116/mo. for 12 mo.*",
    img: "images/famous-4.jpg",
    link: "/product/:id",
  },
];
function SubBanner() {
  const matches = useMediaQuery("(min-width: 720px)");
  return (
    <Container class1="famous-wrapper md:py-5 home-wrapper-2">
      <Swiper
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
        className={
          matches
            ? "w-[calc(100%+20px)] h-[calc(100%+20px)] -translate-x-[10px] -translate-y-[10px] !p-[10px] "
            : "w-[calc(100%+10px)] h-[calc(100%+10px)] -translate-x-[5px] -translate-y-[5px] !p-[5px] "
        }
      >
        {data.map((val, i) => (
          <SwiperSlide key={i}>
            <Link
              to={val.link}
              className={classNames(
                "famous-card position-relative group block overflow-hidden  rounded-lg  card-wrapper p-0",
                i === 0 ? "text-white" : "text-black hover:text-black"
              )}
            >
              <img
                src={val.img}
                className=" w-full group-hover:scale-110 transition-all duration-300"
                alt="famous"
              />
              <div className="famous-content position-absolute text-inherit">
                <h5>{val.label}</h5>
                <h6>{val.subtitle}</h6>
                <p>{val.title}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default SubBanner;
