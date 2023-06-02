import React from "react";

function ActionBar({ data }) {
  const handleClick = (type, event) => {
    event.preventDefault();
    event.stopPropagation();
    switch (type) {
      case 1:
        break;
      case 2:
        break;
      default:
    }
  };
  return (
    <div className="absolute top-[15px] right-2 flex flex-col gap-[7px] ">
      <button className="action-bar-icon" onClick={(e) => handleClick(1, e)}>
        <img src="images/wish.svg" alt="wishlist" />
      </button>
      <button
        className="action-bar-icon translate-x-10 group-hover:translate-x-0"
        onClick={(e) => handleClick(2, e)}
      >
        <img src="images/prodcompare.svg" alt="compare" />
      </button>
      <button
        className="action-bar-icon translate-x-10 group-hover:translate-x-0"
        onClick={(e) => handleClick(3, e)}
      >
        <img src="images/view.svg" alt="view" />
      </button>
      <button
        className="action-bar-icon translate-x-10 group-hover:translate-x-0"
        onClick={(e) => handleClick(4, e)}
      >
        <img src="images/add-cart.svg" alt="addcart" />
      </button>
    </div>
  );
}

export default ActionBar;
