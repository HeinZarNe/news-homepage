import React from "react";

const Section3 = () => {
  const NewsList = [
    {
      img: "./images/image-1.jpg",
      id: "01",
      header: "Reviving Retro PCs",
      desc: "  What happens when old PCs are given modern upgrades?",
    },
    {
      img: "./images/image-2.jpg",
      id: "02",
      header: "Top 10 Laptops of 2022",
      desc: " Our best picks for various needs and budgets.",
    },
    {
      img: "./images/image-3.jpg",
      id: "03",
      header: "The Growth of Gaming",
      desc: " How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row">
      {NewsList.map((item, i) => (
        <div key={i} className="flex flex-1 flex-row  gap-3">
          <img src={item.img} className=" w-20" alt="" />
          <div className="flex flex-col justify-around">
            <span className="font-b text-2xl text-zinc-400">{item.id}</span>
            <span className=" font-b text-base text-black">{item.header}</span>
            <span className=" font text-sm text-zinc-400">{item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section3;
