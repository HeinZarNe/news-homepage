import React from "react";
import Logo from "./util/Logo";

const Nav = () => {
  const NavList = ["Home", "New", "Popular", "Trending", "Categories"];
  return (
    <div className="flex flex-row items-center justify-between pb-4">
      <Logo />
      <div className=" hidden flex-row justify-between md:flex">
        {NavList.map((item, i) => (
          <span
            key={i}
            className="font cursor-pointer px-3 text-sm text-stone-700 hover:text-red-500 "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Nav;
