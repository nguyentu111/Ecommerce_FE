import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { motion } from "framer-motion";
function MenuItemDropDown({ item }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Link to={item.link} className=" hover:text-orange-300 flex p-3">
        <span className="text-[13px]"> {item.title}</span>
        {item.inner ? (
          <span
            className="text-white w-5 h-5 ml-auto flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              setOpen((prev) => !prev);
            }}
          >
            +
          </span>
        ) : null}
      </Link>

      {item.inner ? (
        <motion.div
          initial={{ height: isOpen ? 0 : "auto" }}
          animate={{ height: !isOpen ? 0 : "auto" }}
          className={classNames("bg-white text-black overflow-hidden pl-5")}
        >
          <ul className="p-2">
            {item.inner.map((inner) => (
              <li>
                <Link to={inner.link} className="text-[13px] font-semibold">
                  {inner.title}
                </Link>
                <ul className="pl-5 my-3 space-y-2">
                  {inner.inner.map((val) => (
                    <li className="text-gray-400 text-[13px]">
                      <Link className="" to={val.link}>
                        {val.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : null}
    </>
  );
}

export default MenuItemDropDown;
