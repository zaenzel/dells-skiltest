"use client";

import Loading from "@/app/loading";
import { dollars } from "@/utils/helper";
import { Badge } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const CustomTable = ({ products, carts, tHead }) => {
  const router = useRouter();
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tHead.map((e, i) => {
                return (
                  <th scope="col" className="px-6 py-3" key={i}>
                    {e}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {products &&
              products?.products?.map((item, i) => (
                <tr
                  key={item.id}
                  className="bg-white border-b 
                cursor-pointer hover:bg-gray-50 
                dark:bg-gray-900 dark:border-gray-700"
                  onClick={() => router.push(`/products/${item.id}`)}
                >
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">{item.brand}</td>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">{item.stock}</td>
                  <td className="px-6 py-4">{item.category}</td>
                </tr>
              ))}
            {carts &&
              carts?.carts.map((item, i) => (
                <tr
                  key={item.id}
                  className="bg-white border-b 
                cursor-pointer hover:bg-gray-50 
                dark:bg-gray-900 dark:border-gray-700"
                onClick={() => router.push(`/carts/${item.id}`)}
                >
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4 truncate  max-w-xs">
                    {item?.products?.map((e) => e.title)}
                  </td>
                  <td className="px-6 py-4">{item.totalQuantity}</td>
                  <td className="px-6 py-4">{dollars(item.total)}</td>
                  <td className="px-6 py-4">{dollars(item.discountedTotal)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Suspense>
  );
};

export default CustomTable;
