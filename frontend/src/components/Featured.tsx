import Image from "next/image";
import React from "react";

export const Featured = () => {
  return (
    <div className="">
      {/*WRAPPER*/}
      <div className="">
        {/*SINGLE ITEM */}
        <div className="">
          {/*IMAGE CONTAINER */}
          <div className="relative">
            <Image src={"/"} alt="" />
          </div>

          {/*TEXT CONTAINER */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
