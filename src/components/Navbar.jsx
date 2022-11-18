import { useState } from "react";

import { close, menu } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="bg-red-300 w-full flex px-4 py-6 relative z-40">
        <a href="/" className="font-semibold text-[24px]">
          Logo
        </a>

        <ul className="list-none md:flex hidden justify-end items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-normal cursor-pointer text-[16px] hover:text-secondary transition-colors duration-300 ${
                index === navLinks.length - 1
                  ? "mr-0"
                  : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>
      <div
        className={`${
          toggle ? "top-[84px]" : "top-[-152px]"
        } p-6 bg-gray-500 absolute z-[20] top-[84px] right-0 min-w-full justify-center transition-all duration-500 ease-in-out`}
      >
        <ul className="list-none flex flex-col justify-end items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1
                  ? "mr-0"
                  : "mb-4"
              } text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
