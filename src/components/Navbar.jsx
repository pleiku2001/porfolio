import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bar, KN } from "../assets";
import { close } from "../assets/icons";
function Navbar() {
 
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center w-full sm:px-[150px] px-6 mx-auto fixed top-0 z-50 ">
      <Link to="/">
        <img
          src={KN}
          alt="logo"
          className="w-[110px]  object-contain"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      </Link>

      <ul className=" gap-8 font-extralight lg:flex hidden ">
        <a
          href="#about"
          className="font-extralight text-white cursor-pointer  text-[22px] z-10"
        >
          About
        </a>
        <a
          href="#skills"
          className="font-extralight text-white cursor-pointer text-[22px]"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="font-extralight text-white cursor-pointer text-[22px]"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="font-extralight text-white cursor-pointer text-[22px]"
        >
          Contact
        </a>
      </ul>
      {open ? (
        <img
          onClick={() => setOpen(!open)}
          src={close}
          alt=""
          className="w-[40px] cursor-pointer block lg:hidden absolute top-[30px] right-[40px] z-10 "
        />
      ) : (
        <img
          src={Bar}
          alt=""
          className="w-[40px] cursor-pointer block lg:hidden absolute top-[30px] right-[40px] z-10 "
          onClick={() => setOpen(!open)}
        />
      )}
      {open ? (
        <ul className="w-[100px] h-[200px] border-[1px] border-white  absolute top-[80px] right-[45px]  lg:hidden rounded-lg flex flex-col justify-center items-center gap-5">
          <li>
            <a
              href="#about"
              className="text-white font-semibold"
              onClick={() => setOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-white font-semibold"
              onClick={() => setOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white font-semibold"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white font-semibold"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;

