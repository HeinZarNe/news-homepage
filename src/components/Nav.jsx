import React, { useState, useEffect } from "react";
import Logo from "./util/Logo";
import CloseIcon from "./util/CloseIcon";
import MenuIcon from "./util/MenuIcon";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const NavList = ["Home", "New", "Popular", "Trending", "Categories"];
  const handleClick = () => {
    setOpen((previous) => setOpen(!previous));
  };

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    screenSize >= 640 ? setOpen(true) : setOpen(false);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  return (
    <div className="flex flex-row items-center justify-between pb-4">
      <Logo />
      {isOpen && (
        <div className=" fixed left-0 top-0 h-screen w-screen bg-stone-900 bg-opacity-60 sm:hidden"></div>
      )}
      {isOpen ? (
        <div className=" fixed right-0 top-0 flex h-screen w-4/5 flex-col justify-center bg-white px-5 sm:relative sm:h-auto sm:w-auto sm:flex-row sm:justify-between sm:bg-transparent sm:px-0">
          <div
            className="fixed right-0 top-0 z-10 px-5 py-12 sm:hidden "
            onClick={handleClick}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
          {NavList.map((item, i) => (
            <span
              key={i}
              className=" font cursor-pointer px-3 py-4 text-xl text-black hover:text-red-500  sm:px-3  sm:py-0 sm:text-sm sm:text-stone-700 "
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <div
          className="absolute right-0 top-0 z-10 px-5 py-12 sm:hidden"
          onClick={handleClick}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      )}
    </div>
  );
};

export default Nav;
