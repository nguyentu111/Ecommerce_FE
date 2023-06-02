import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import CollectionSwiper from "../components/HomeComponents/CollectionSwiper";
import { Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import FeatureColectionSwiper from "../components/HomeComponents/FeatureColectionSwiper";
import SubBanner from "../components/HomeComponents/SubBanner";
import Services from "../components/HomeComponents/Services";
import SpecialProductSwiper from "../components/HomeComponents/SpecialProductSwiper";
import PopularProduct from "../components/HomeComponents/PopularProduct";
import LastestBlog from "../components/HomeComponents/LastestBlog";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-2 md:!py-[60px]">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-2 ">
          <MainBanner />
          <MiniBanner />
        </div>
      </Container>
      <Services />
      <CollectionSwiper />
      <FeatureColectionSwiper />
      <SubBanner />

      <SpecialProductSwiper />
      <PopularProduct />
      <Container class1="marque-wrapper home-wrapper-2 py-5 select-none">
        <div className="card-wrapper">
          <div className="col-12">
            <div className="marquee-inner-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img
                    src="images/brand-01.png"
                    alt="brand"
                    draggable={false}
                  />
                </div>
                <div className="mx-4 w-25">
                  <img
                    src="images/brand-02.png"
                    alt="brand"
                    draggable={false}
                  />
                </div>
                <div className="mx-4 w-25">
                  <img
                    src="images/brand-03.png"
                    alt="brand"
                    draggable={false}
                  />
                </div>
                <div className="mx-4 w-25">
                  <img
                    src="images/brand-04.png"
                    alt="brand"
                    draggable={false}
                  />
                </div>
                <div className="mx-4 w-25">
                  <img
                    src="images/brand-05.png"
                    alt="brand"
                    draggable={false}
                  />
                </div>
                <div className="mx-4 w-25">
                  <img
                    src="images/brand-06.png"
                    alt="brand"
                    draggable={false}
                  />
                </div>
                <div className="mx-4 w-25">
                  <img
                    src="images/brand-07.png"
                    alt="brand"
                    draggable={false}
                  />
                </div>
                <div className="mx-4 w-25">
                  <img
                    src="images/brand-08.png"
                    alt="brand"
                    draggable={false}
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <LastestBlog />
    </>
  );
};

export default Home;
const MainBanner = () => (
  <Swiper
    loop
    className="max-w-full"
    modules={[Autoplay]}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    }}
    spaceBetween={0}
    slidesPerView={1}
    onSlideChange={() => {}}
    onSwiper={(swiper) => {}}
  >
    <SwiperSlide>
      <div className=" position-relative">
        <img
          src="images/main-banner-1.jpg"
          className="rounded-3"
          alt="main banner"
        />
        <div className="position-absolute top-[13%] left-[7%] bottom-0 right-auto">
          <h4 className="text-[10px] sm:text-[15px] text-red-800 mb-2">
            SUPERCHARGED FOR PROS.
          </h4>
          <h5 className="text-[20px] font-bold mb-2">iPad S13+ Pro.</h5>
          <p className="text-[10px] mb-2  lg:text-[15px]">
            From $999.00 or $41.62/mo. <br />
            for 24 mo. Footnote*
          </p>
          <Link className="px-2 py-1 text-[8px] bg-black text-white rounded-xl text-center lg:text-[12px] lg:p-3 lg:rounded-full">
            BUY NOW
          </Link>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className=" position-relative">
        <img
          src="images/main-banner-2.jpg"
          className="rounded-3"
          alt="main banner"
        />
        <div className="position-absolute top-[13%] left-[7%] bottom-0 right-auto">
          <h4 className="text-[10px] sm:text-[15px] text-red-800 mb-2">
            SUPERCHARGED FOR PROS.
          </h4>
          <h5 className="text-[20px] font-bold mb-2">Special Sale</h5>
          <p className="text-[10px] mb-2  lg:text-[15px]">
            From $999.00 or $41.62/mo.
            <br />
            for 24 mo. Footnote*
          </p>
          <Link className="px-2 py-1 text-[8px] bg-black text-white rounded-xl text-center mb-2  lg:text-[12px] lg:p-3 lg:rounded-full">
            BUY NOW
          </Link>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
);
const MiniBanner = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2  justify-content-between align-items-center gap-2">
    <div className=" position-relative group w-full overflow-hidden cursor-pointer">
      <img
        src="images/catbanner-01.jpg"
        className="rounded-3 w-full group-hover:scale-110 transition-all"
        alt="main banner"
      />

      <div className="position-absolute top-[13%] left-[7%] bottom-0 right-auto">
        <h4 className="text-[10px]  text-red-800 md-2 xl:text-[14px]">
          BEST SALE
        </h4>
        <h5 className=" font-bold my-2 sm:text-[15px] mb-2 xl:text-[20px]">
          Laptops max
        </h5>
        <p className="text-[10px] mb-2 xl:text-[14px]">
          From $999.00 <br /> or $41.62/mo.
        </p>
      </div>
    </div>
    <div className=" position-relative group w-full overflow-hidden cursor-pointer">
      <img
        src="images/catbanner-03.jpg"
        className="rounded-3 w-full group-hover:scale-110 transition-all"
        alt="main banner"
      />

      <div className="position-absolute top-[13%] left-[7%] bottom-0 right-auto">
        <h4 className="text-[10px]  text-red-800 md-2 xl:text-[14px]">
          NEW ARIVAL
        </h4>
        <h5 className=" font-bold my-2 sm:text-[15px] mb-2 xl:text-[20px]">
          Buy Ipad Air
        </h5>
        <p className="text-[10px] mb-2 xl:text-[14px]">
          From $599.00 <br /> or $49.99/mo. for 12 mo*.
        </p>
      </div>
    </div>
    <div className=" position-relative group w-full overflow-hidden cursor-pointer">
      <img
        src="images/catbanner-02.jpg"
        className="rounded-3 w-full group-hover:scale-110 transition-all"
        alt="main banner"
      />

      <div className="position-absolute top-[13%] left-[7%] bottom-0 right-auto">
        <h4 className="text-[10px]  text-red-800 md-2 xl:text-[14px]">
          15% OFF
        </h4>
        <h5 className=" font-bold my-2 sm:text-[15px] mb-2 xl:text-[20px]">
          Smartwatch 7
        </h5>
        <p className="text-[10px] mb-2 xl:text-[14px]">
          Shop the lastest brand <br /> styles and colors
        </p>
      </div>
    </div>
    <div className=" position-relative group w-full overflow-hidden cursor-pointer">
      <img
        src="images/catbanner-04.jpg"
        className="rounded-3 w-full group-hover:scale-110 transition-all"
        alt="main banner"
      />

      <div className="position-absolute top-[13%] left-[7%] bottom-0 right-auto">
        <h4 className="text-[10px]  text-red-800 md-2 xl:text-[14px]">
          FREE EVERGRAVING
        </h4>
        <h5 className=" font-bold my-2 sm:text-[15px] mb-2  xl:text-[20px]">
          AirPods Max
        </h5>
        <p className="text-[10px] mb-2 xl:text-[14px]">
          High fidelity playback & <br /> ultra low distortion
        </p>
      </div>
    </div>
  </div>
);
