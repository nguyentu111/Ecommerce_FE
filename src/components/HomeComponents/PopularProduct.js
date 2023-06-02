import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import ProductCard from "../ProductCard";
import className from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperButton from "./SwiperButton";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useMediaQuery } from "usehooks-ts";
import usePortal from "../usePortal";
import { createPortal } from "react-dom";
const dataSubBanner = {
  label: "big screen",
  subtitle: "Smart Watch Series 7",
  title: "From $399 or $16.62/mo.*",
  img: "images/famous-1.jpg",
  link: "/product/:id",
};
const banners = [
  "images/cat-product-banner-02.jpg",
  "images/cat-product-banner-01.jpg",
  "images/cat-product-banner-03.jpg",
];
const swiperBreakpoints = {
  1: { slidesPerView: 1 },
  660: { slidesPerView: 2 },
  1100: { slidesPerView: 3 },
};
function PopularProduct() {
  const [tabActive, settabActive] = useState(1);
  const isLargeScreen = useMediaQuery("(min-width: 1100px)");
  const isSmallScren = useMediaQuery("(min-width: 660px)");
  const isMediumScreen = useMediaQuery("(min-width: 750px)");
  const [headingNode, setHeadingNode] = useState(null);
  const headingRef = useRef();
  useEffect(() => {
    setHeadingNode(headingRef.current);
  }, []);
  return (
    <Container class1="popular-wrapper py-5 home-wrapper-2 flex">
      <div ref={headingRef} />
      <div className="lg:grid lg:grid-cols-4 xl:grid-cols-6 select-none">
        <div
          className={className(
            "tab-wrapper-1",
            "xl:tab-wrapper-2",
            "lg:col-span-12 xl:col-span-1"
          )}
        >
          <div onClick={() => settabActive(1)} className="tab-item group">
            <img className="w-[50px] " src="images/cat-icon-03.webp" />
            <span
              className={className(
                "tab-item-text",
                tabActive === 1 ? "!text-black" : ""
              )}
            >
              Smart Watch
            </span>
          </div>
          <div onClick={() => settabActive(2)} className="tab-item group">
            <img className="w-[50px] " src="images/cat-icon-01.webp" />
            <span
              className={className(
                "tab-item-text",
                tabActive === 2 ? "!text-black" : ""
              )}
            >
              Speaker
            </span>
          </div>
          <div onClick={() => settabActive(3)} className="tab-item group">
            <img className="w-[50px] " src="images/cat-icon-02.webp" />
            <span
              className={className(
                "tab-item-text",
                tabActive === 3 ? "!text-black" : ""
              )}
            >
              Laptops
            </span>
          </div>
        </div>
        <div className="flex gap-2 md:!gap-5  lg:col-span-5 md:col-span-3">
          <Link
            to={"#"}
            className={classNames(
              "famous-card position-relative group block overflow-hidden max-w-[50%]",
              "rounded-lg h-fit  card-wrapper p-0 text-white hover:text-white"
            )}
          >
            <img
              src={banners[tabActive - 1]}
              className=" group-hover:scale-110 transition-all duration-300"
              alt="famous"
            />
            {/* <div className="famous-content position-absolute text-inherit">
              <h5>{dataSubBanner.label}</h5>
              <h6 className="text-white">{dataSubBanner.subtitle}</h6>
              <p>{dataSubBanner.title}</p>
            </div> */}
          </Link>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={swiperBreakpoints}
            spaceBetween={isMediumScreen ? 20 : 10}
            className="!w-full col-span-2 lg:col-span-3 !max-w-full"
          >
            <PotalHeading node={headingNode} />
            {Array.from({ length: 10 }).map((v, i) => (
              <SwiperSlide key={i} className="">
                <ProductCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
}

export default PopularProduct;

const PotalHeading = ({ node }) => {
  if (!node) return null;
  const jsx = (
    <div className="flex justify-between">
      <h2 className="section-title">Our Popular Products</h2>
      <div className="flex">
        <SwiperButton type="prev" clName="p-2 rounded-sm">
          <span aria-label="Previous"></span>
        </SwiperButton>
        <SwiperButton type="next" clName="p-2 rounded-sm">
          <span aria-label="Next"></span>
        </SwiperButton>
      </div>
    </div>
  );
  return createPortal(jsx, node);
};
