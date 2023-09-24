import CustomTable from "@/components/table/CustomTable";
import { getCart } from "@/utils/api";
import React from "react";
import { tHeadCarts } from "@/utils/helper";
import Pagination from "@/components/pagination/Pagination";

const Carts = async ({searchParams}) => {
  const { data } = await getCart(searchParams?.skip);

  return (
    <main className="min-h-screen w-full p-5 ">
      <div className="flex flex-col gap-5">
        <CustomTable carts={data} tHead={tHeadCarts} />
        <div className="self-end">
          <Pagination data={data} />
        </div>
      </div>
    </main>
  );
};

export default Carts;
