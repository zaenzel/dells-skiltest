"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import { AiOutlineRightCircle } from "react-icons/ai";

export default function CustomCarousel({ images }) {

  return (
    <Carousel
      className="bg-gray-800 w-full h-60 sm:h-72"
    >
      {images?.map((item, i) => {
        return (
          <div className="w-full h-full" key={i}>
            <Image
              fill
              alt="image product"
              src={item}
              style={{ objectFit: "contain" }}
            />
          </div>
        );
      })}
    </Carousel>
  );
}

{
  /* <img
alt="..."
src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
/>
<img
alt="..."
src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
/>
<img
alt="..."
src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
/>
<img
alt="..."
src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
/>
<img
alt="..."
src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
/> */
}
