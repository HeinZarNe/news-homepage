import React from "react";

const Section1 = () => {
  return (
    <div className=" flex flex-col justify-between gap-3 md:w-8/12 ">
      <div className="md:flex-1">
        <img
          src="./images/image-web-3-desktop.jpg"
          alt=""
          className=" h-full w-full"
        />
      </div>
      <div className="flex flex-col py-3 md:flex-row ">
        <span className="font-x-b grid flex-1 items-center text-3xl md:text-4xl lg:text-5xl ">
          The Bright Future of Web 3.0?
        </span>
        <div className="font flex flex-1 flex-col justify-evenly leading-5">
          <span className=" py-5 text-sm text-stone-700 md:py-0 md:text-base">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </span>
          <button className=" w-[150px] bg-red-500 px-2 py-3 text-[10px] tracking-widest text-white hover:bg-[#00001a]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
