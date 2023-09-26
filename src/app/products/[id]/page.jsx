'use client'
import CustomCarousel from "@/components/carousel/CustomCarousel";
import { getDetailProduct } from "@/utils/api";
import React from "react";
import { dollars } from "@/utils/helper";
import { Rating } from "flowbite-react";

const Page = async ({ params }) => {
  const { data } = await getDetailProduct(params.id);
  const rating = Math.round(data?.rating);

  return (
    <main className="w-full flex justify-center md:py-10 md:px-5 p-5">
      <div className="flex flex-col gap-6 lg:flex-row w-full max-w-4xl">
        <CustomCarousel images={data?.images} />

        <div className="flex flex-col gap-5 self-start">
          <h1 className="font-semibold text-xl text-neutral-800">
            {data?.title}
            {"  "}
            <span className="text-sm font-light text-neutral-500">
              {data?.category}
            </span>
          </h1>
          <div className="flex gap-10 text-sm">
            <p>
              Brand : <span className="text-neutral-500">{data?.brand}</span>{" "}
            </p>
            <p>
              Stock : <span className="text-neutral-500">{data?.stock}</span>
            </p>
            <div className="flex flex-wrap-reverse items-center">
              <Rating>
                {[...Array(rating)].map((r, i) => (
                  <Rating.Star key={i} />
                ))}
              </Rating>
              <p className="text-neutral-500">({data?.rating})</p>
            </div>
          </div>
          <p className="text-3xl font-bold  text-neutral-800">
            {dollars(data?.price)}
          </p>

          <p>{data?.description}</p>
        </div>
      </div>
    </main>
  );
};

export default Page;
