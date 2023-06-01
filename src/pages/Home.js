import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { collection_cards, services } from "../utils/Data";
import classNames from "classnames";
import useIsSmartPhone from "../hooks/useIsSmartPhone";
import CollectionSwiper from "./CollectionSwiper";

const MainBanner = () => (
  <div className=" position-relative">
    <img
      src="images/main-banner-1.jpg"
      className="rounded-3"
      alt="main banner"
    />
    <div className="position-absolute top-[13%] left-[7%] bottom-0 right-auto">
      <h4 className="text-[10px] sm:text-[15px] text-red-800">
        SUPERCHARGED FOR PROS.
      </h4>
      <h5 className="text-[20px] font-bold">iPad S13+ Pro.</h5>
      <p className="text-[10px]">
        From $999.00 or $41.62/mo. <br />
        for 24 mo. Footnote*
      </p>
      <Link className="px-2 py-1 text-[8px] bg-black text-white rounded-xl text-center">
        BUY NOW
      </Link>
    </div>
  </div>
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
        <h4 className="text-[10px]  text-red-800">BEST SALE</h4>
        <h5 className="text-[20px] font-bold my-2">Laptops max</h5>
        <p className="text-[10px]">
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
        <h4 className="text-[10px]  text-red-800">NEW ARIVAL</h4>
        <h5 className="text-[20px] font-bold my-2">Buy Ipad Air</h5>
        <p className="text-[10px]">
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
        <h4 className="text-[10px]  text-red-800">15% OFF</h4>
        <h5 className="text-[20px] font-bold my-2">Smartwatch 7</h5>
        <p className="text-[10px]">
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
        <h4 className="text-[10px]  text-red-800">FREE EVERGRAVING</h4>
        <h5 className="text-[20px] font-bold my-2">AirPods Max</h5>
        <p className="text-[10px]">
          High fidelity playback & <br /> ultra low distortion
        </p>
      </div>
    </div>
  </div>
);
const Home = () => {
  const isSmartPhone = useIsSmartPhone(480);
  return (
    <>
      <div className="home-wrapper-1 py-5 container">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-2">
          <MainBanner />
          <MiniBanner />
        </div>
      </div>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-around">
              {services?.map((i, j) => {
                let clname;
                switch (j) {
                  case 0: {
                    break;
                  }
                  case 1: {
                    clname = "hidden sm:flex";
                    break;
                  }
                  case 2: {
                    clname = "hidden md:flex";
                    break;
                  }
                  default: {
                    clname = "hidden lg:flex";
                    break;
                  }
                }
                return (
                  <div
                    className={classNames("items-center gap-15 flex", clname)}
                    key={j}
                  >
                    <img src={i.image} alt="services" />
                    <div>
                      <h6 className="text-[13px]">{i.title}</h6>
                      <p className="mb-0 text-[12px] text-gray-400">
                        {i.tagline}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <CollectionSwiper />
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="famous-card position-relative ">
            <img
              src="images/famous-1.webp"
              className="img-fluid"
              alt="famous"
            />
            <div className="famous-content position-absolute">
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $399or $16.62/mo. for 24 mo.*</p>
            </div>
          </div>

          <div className="famous-card position-relative ">
            <img
              src="images/famous-2.webp"
              className="img-fluid"
              alt="famous"
            />
            <div className="famous-content position-absolute">
              <h5 className="text-dark">Studio Display</h5>
              <h6 className="text-dark">600 nits of brightness.</h6>
              <p className="text-dark">27-inch 5K Retina display</p>
            </div>
          </div>
          <div className="famous-card position-relative grid grid-cols-6 sm:grid-cols-12 md:grid-cols-6">
            <img
              src="images/famous-3.webp"
              className="img-fluid"
              alt="famous"
            />
            <div className="famous-content position-absolute">
              <h5 className="text-dark">smartphones</h5>
              <h6 className="text-dark">Smartphone 13 Pro.</h6>
              <p className="text-dark">
                Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
              </p>
            </div>
          </div>
        </div>

        <div className="famous-card position-relative grid grid-cols-6 sm:grid-cols-12 md:grid-cols-6">
          <img src="images/famous-3.webp" className="img-fluid" alt="famous" />
          <div className="famous-content position-absolute">
            <h5 className="text-dark">home speakers</h5>
            <h6 className="text-dark">Room-filling sound.</h6>
            <p className="text-dark">From $699 or $116.58/mo. for 12 mo.*</p>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
