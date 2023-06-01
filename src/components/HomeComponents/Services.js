import classNames from "classnames";
import React from "react";
import Container from "../Container";
import { services } from "../../utils/Data";

function Services() {
  return (
    <Container class1="home-wrapper-2 py-5 ">
      <div className="row container">
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
  );
}

export default Services;
