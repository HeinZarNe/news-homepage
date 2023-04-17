import React from "react";

const Section2 = () => {
  const NewList = [
    {
      header: "  Hydrogen VS Electric Cars",
      desc: "  Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      header: "The Downsides of AI Artistry",
      desc: "  What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      header: " Is VC Funding Drying Up?",
      desc: "  Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <div className=" bg- flex  flex-col justify-between p-[20px] pb-0 md:w-4/12">
      <span className="font-x-b text-3xl text-[#e9ae52]">New</span>
      <div className="flex flex-1 flex-col justify-around">
        {NewList.map((item, i) => (
          <div key={i} className="flex flex-col py-4  md:pb-0">
            <span className=" font-b text-lg text-white hover:text-[#e9ae52]">
              {item.header}
            </span>
            <span className=" border-b-[1px] border-neutral-600 pb-5 text-neutral-500">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
