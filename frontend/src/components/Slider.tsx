"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Always fresh & hot",
    image: "/menu-icon.png",
  },
  {
    id: 2,
    title: "We deliver your order wherever you are in VN",
    image: "/cart-icon.png",
  },
  {
    id: 3,
    title: "The best tea to share with your family",
    image: "/close-icon.png",
  },
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((pre) => (pre === data.length - 1 ? 0 : pre + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/**TEXT CONTAINER */}
      <div className="flex-1 h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold ">
        <h1 className="text-xl text-center uppercase p-4 md:p-10 md:text-6xl xl:test-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/**IMAGE CONTAINER */}
      <div className="flex-1 w-full h-1/2 relative ">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
