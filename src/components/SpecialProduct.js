import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

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
};
const SpecialProduct = ({}) => {
  return (
    <>
      <div className="mb-3 bg-white card-wrapper rounded-lg">
        <div className="">
          <div className="grid grid-cols-2">
            <div>
              <img src={data.images[0]} className="" alt="watch" />
              <Swiper
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                slidesPerView={2}
                className="max-w-full"
              >
                {data.images.slice(1, -1).map((imgLink) => (
                  <SwiperSlide>
                    <img src={imgLink} className="max-w-[50px]" alt="watch" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="special-product-content">
              <h5 className="brand">Havels</h5>
              <h6 className="title">
                Samsung Galaxy Note10+ Mobile Phone; Sim...
              </h6>
              <div className="mb-[12px]">
                <ReactStars
                  count={5}
                  size={15}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
              <p className="price">
                <strike>$200</strike>
                <span className="text-red-600 ml-2">$100</span>
              </p>
              <div className="discount-till flex flex-nowrap items-center gap-10">
                <p className="mb-0 flex gap-2 text-[13px]">
                  <b>5 </b>Days
                </p>
                <div className="flex items-center">
                  <div className="w-[30px] h-[30px] text-center bg-red-500 text-white rounded-full flex items-center justify-center">
                    <span className="">1</span>
                  </div>
                  :
                  <div className="w-[30px] h-[30px] text-center bg-red-500 text-white rounded-full flex items-center justify-center">
                    <span className="">1</span>
                  </div>
                  :
                  <div className="w-[30px] h-[30px] text-center bg-red-500 text-white rounded-full flex items-center justify-center">
                    <span className="">1</span>
                  </div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
