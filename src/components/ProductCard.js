import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import ActionBar from "./ActionBar";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div className="select-none">
        <Link
          to={`${
            location.pathname == "/"
              ? "/product/:id"
              : location.pathname == "/product/:id"
              ? "/product/:id"
              : ":id"
          }`}
          className="product-card card-wrapper relative group"
        >
          <ActionBar data={{}} />
          <div className="product-image">
            <img src="images/watch.jpg" className="m-auto" alt="product" />
            <img src="images/watch2.jpg" className="m-auto" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand mb-3">Havels</h6>
            <h5 className="product-title mb-2">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={15}
              value={4}
              edit={false}
              activeColor="#ffd700"
              classNames="mb-2"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">$100.00</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
