import React from "react";

const Containers = ({ children }) => {
  return (
    <>
      <div className="mx-auto flex flex-col gap-5 px-5 py-16 pt-10 md:px-12 lg:px-32 ">
        {children}
      </div>
    </>
  );
};

export default Containers;
