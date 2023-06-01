import { motion } from "framer-motion";
import { menu_items } from "../utils/Data";
import MenuItemDropDown from "./MenuItemDropDown";
import { Drawer } from "@mui/material";
import Hamburger from "hamburger-react";
import { useState } from "react";
const Modal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Hamburger
        color="#fff"
        size={20}
        toggled={isOpenModal}
        toggle={setIsOpenModal}
      />
      {isOpenModal ? (
        <div
          className="w-screen h-screen opacity-50 bg-black fixed top-0 left-0 z-10 transition-all overflow-hidden"
          onClick={() => {
            setIsOpenModal(false);
          }}
        ></div>
      ) : null}
      <Drawer
        keepMounted
        open={isOpenModal}
        onClose={() => setIsOpenModal(!isOpenModal)}
        anchor="left"
      >
        <div
          onClick={() => setIsOpenModal(false)}
          className="absolute text-white w-[30px] h-[30px] cursor-pointer top-[37px] left-[270px] bg-[var(--color-232f3e)] flex items-center justify-center"
        >
          X
        </div>
        <div className="w-[270px] fixed left-0 z-10 h-[100vh] bg-[var(--color-131921)] text-white py-[37px] max-h-[100vh] overflow-y-scroll">
          <ul>
            {menu_items.categories.map((item) => {
              return (
                <li
                  key={item.title}
                  className="hover:text-orange-300 cursor-pointer border-y-[1px] border-gray-800"
                >
                  <MenuItemDropDown item={item} />
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </>
  );
};
export default Modal;
