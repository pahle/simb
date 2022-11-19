import { useState } from "react";

import { close, menu } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed top-0 w-full shadow-md">
      <div className="bg-white w-full flex xl:px-48 px-6 py-6 relative z-40 justify-between ">
        <a href="/" className="font-semibold text-[24px] sticky top-0">
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
          toggle ? "top-[83px] opacity-100 border-t-2" : "top-[-152px] opacity-0"
        } p-6 bg-white shadow-md absolute z-[20] top-[84px] right-0 min-w-full justify-center transition-all duration-300 ease-in-out`}
      >
        <ul className="list-none flex flex-col justify-end items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1
                  ? "mr-0"
                  : "mb-4"
              }`}
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
