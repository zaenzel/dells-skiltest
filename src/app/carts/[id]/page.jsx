import CardCustom from "@/components/card/CardCustom";
import Desc from "@/components/desc/Desc";
import { getCartDetail } from "@/utils/api";
import { dollars } from "@/utils/helper";
import React from "react";

const page = async ({ params }) => {
  const { data } = await getCartDetail(params.id);

  return (
    <main className="relative w-full flex flex-col justify-center md:py-10 md:px-5 p-5">
      <h1 className="font-bold text-2xl mb-5">Product List of Carts</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      gap-4 w-full pb-40 md:pb-10"
      >
        {data?.products?.map((item, i) => {
          return <CardCustom item={item} key={i} />;
        })}
      </div>

      <div
        className="
        w-full flex-col hidden md:flex max-w-md"
      >
        <h5 className="mb-5 font-semibold text-xl">Detail Cart</h5>
        <Desc data={data} />
      </div>

      {/* mobile */}
      <div
        className="fixed bottom-0 left-0
        w-full shadow-xl border-t-2 bg-white p-5
        flex flex-col gap-3 md:hidden"
      >
        <Desc data={data} />
      </div>
    </main>
  );
};

export default page;
