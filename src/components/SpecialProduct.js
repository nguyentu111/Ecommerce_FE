import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "./HomeComponents/SwiperButton";
import ActionBar from "./ActionBar";

const data = {
  images: [
    "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_287x.jpg?v=1655096377",
    "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_00_287x.jpg?v=1655096387",
    "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_01_287x.jpg?v=1655096387",
    "https://cdn.shopify.com/s/files/1/0620/5082/8457/products/04_1dd5e4d2-861f-4f8e-8d28-28f5934a7e13_287x.jpg?v=1655095076",
  ],
  name: "Samsung Galaxy Tab A SM-T295, 4G",
  brand: "Havells",
  rating: 4.5,
  regularPrice: "75.00",
  salePrice: "60.00",
  url: "/product/:id",
};
const SpecialProduct = ({}) => {
  const [showingImg, setShowingImg] = useState(data.images[0]);
  return (
    <>
      <div className="mb-3 bg-white card-wrapper rounded-lg p-0 group cursor-default overflow-hidden  product-card">
        <div className="grid grid-cols-2">
          <div className="">
            <Link to={data.url} className="block relative overflow-hidden">
              <img src={showingImg} className="w-full" alt="watch" />
              <label className="font-bold text-[11px] bg-[var(--color-febd69)] rounded-xl px-[7px] py-[1px] group-hover:hidden  absolute top-5 left-3">
                -33%
              </label>
              <ActionBar data={data} />
            </Link>
            <div className="px-[10px] pb-[20px]">
              <Swiper
                nested
                preventClicksPropagation
                resistance={false}
                spaceBetween={10}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                slidesPerView={2}
                className="max-w-full relative"
              >
                <SwiperButton
                  type="prev"
                  clName="p-2 rounded-sm absolute -left-2 top-[50%] z-10 -translate-y-[50%] !hidden group-hover:!block"
                >
                  <span aria-label="Previous"></span>
                </SwiperButton>
                {data.images.slice(0).map((imgLink) => (
                  <SwiperSlide>
                    <img
                      onClick={() => setShowingImg(imgLink)}
                      src={imgLink}
                      className="w-full max-w-[95px] border-[1px]  rounded-md !mx-auto"
                      alt="watch"
                    />
                  </SwiperSlide>
                ))}
                <SwiperButton
                  type="next"
                  clName="p-2 rounded-sm absolute -right-2  top-[50%] z-10 -translate-y-[50%] !hidden group-hover:!block"
                >
                  <span aria-label="Next"></span>
                </SwiperButton>
              </Swiper>
            </div>
          </div>
          <div className="special-product-content p-[10px] pr-[20px]">
            <h5 className="brand">Havels</h5>
            <Link to={data.url} className="block hover:text-black">
              <h6 className="title line-clamp-3">
                Samsung Galaxy Note10+ Mobile Phone; Sim...
              </h6>
            </Link>
            <div className="mb-[12px]">
              <ReactStars
                half
                count={5}
                size={15}
                value={4.5}
                edit={false}
                activeColor="#ffd700"
              />
            </div>
            <p className="price">
              <strike>${data.regularPrice}</strike>
              <span className="text-red-600 ml-2">${data.salePrice}</span>
            </p>
            <div className=" flex flex-wrap items-center gap-2">
              <p className="mb-0 flex gap-2 text-[13px]">
                <b>5 </b>Days
              </p>
              <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] text-center bg-red-500 text-white rounded-full flex items-center justify-center">
                  <span className="">14</span>
                </div>
                :
                <div className="w-[30px] h-[30px] text-center bg-red-500 text-white rounded-full flex items-center justify-center">
                  <span className="">25</span>
                </div>
                :
                <div className="w-[30px] h-[30px] text-center bg-red-500 text-white rounded-full flex items-center justify-center">
                  <span className="">59</span>
                </div>
              </div>
            </div>
            <Link className="button mt-3 group-hover:bg-[var(--color-febd69)] group-hover:text-black">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
