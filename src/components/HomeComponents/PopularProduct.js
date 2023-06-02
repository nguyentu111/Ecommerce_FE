import React, { useState } from "react";
import Container from "../Container";
import ProductCard from "../ProductCard";
import className from "classnames";
function PopularProduct() {
  const [tabActive, settabActive] = useState(1);

  return (
    <Container class1="popular-wrapper py-5 home-wrapper-2">
      <h3 className="section-title">Our Popular Products</h3>
      <div className="tab-wrapper">
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
      <div className="row">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
}

export default PopularProduct;
