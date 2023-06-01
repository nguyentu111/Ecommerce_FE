import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Modal from "./Modal";
const HeaderSearch = () => (
  <div className="input-group w-[360px]">
    <input
      type="text"
      className="text-[12px] form-control"
      placeholder="Search Product Here..."
      aria-label="Search Product Here..."
      aria-describedby="basic-addon2"
    />
    <span
      className="rounded-[0.25rem] bg-orange-300 px-2 flex items-center justify-center"
      id="basic-addon2"
    >
      <BsSearch className="fs-6" />
    </span>
  </div>
);
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="flex items-center container">
          <div className="flex w-full justify-between items-center">
            <p className="text-white mb-0 hidden sm:block">
              Free Shipping Over $100 & Free Returns
            </p>
            <p className="text-white mb-0 text-center w-full sm:w-auto">
              Hotline:
              <a className="text-white" href="tel:+91 8264954234">
                +91 8264954234
              </a>
            </p>
          </div>
        </div>
      </header>
      <header className="header-upper">
        <div className="container p-2.5 m-auto">
          <div className=" align-items-center flex justify-between">
            <div className="flex justify-center items-center">
              <div className="lg:hidden">
                <Modal />
              </div>
              <h2>
                <Link className="text-white" to="/">
                  Shoppi Devth
                </Link>
              </h2>
            </div>
            <div className="hidden lg:inline-block ">
              <HeaderSearch />
            </div>
            <div className="flex space-x-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img
                      src="images/compare.svg"
                      alt="compare"
                      className="w-[20px] sm:w-[27px] lg-[35px]  m-2"
                    />
                    <p className="mb-0 hidden xl:block">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img
                      src="images/wishlist.svg"
                      alt="wishlist"
                      className="w-[20px] sm:w-[27px] lg-[35px]  m-2"
                    />
                    <p className="mb-0 hidden xl:block">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img
                      src="images/user.svg"
                      alt="user"
                      className="w-[20px] sm:w-[27px] lg-[35px]  m-2"
                    />
                    <p className="mb-0 hidden xl:block">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img
                      src="images/cart.svg"
                      alt="cart"
                      className="w-[20px] sm:w-[27px] lg-[35px]  m-2"
                    />
                    <div
                      data-num={3}
                      className="d-flex flex-column gap-10 relative md:gap-0"
                    >
                      <span className="hidden md:block">{0}</span>
                      <p className="mb-0 hidden md:block">$ 500</p>
                      <span className="absolute -right-2 w-5 h-7 rounded-lg -top-[25px] md:hidden">
                        {0}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container">
          <div className="row hidden lg:block">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex items-center justify-center">
            {" "}
            {<HeaderSearch />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
