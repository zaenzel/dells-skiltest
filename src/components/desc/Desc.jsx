import { dollars } from "@/utils/helper";
import React from "react";

const Desc = ({ data }) => {

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-neutral-500">
          Order ID:{" "}
          <span className="text-neutral-800 text-base">{data?.id}</span>{" "}
        </p>
        <p className="text-sm text-neutral-500">
          User ID:{" "}
          <span className="text-neutral-800 text-base">{data?.userId}</span>{" "}
        </p>
        <p className="text-sm text-neutral-500">
          Total Product:{" "}
          <span className="text-neutral-800 text-base">
            {data?.totalProducts}
          </span>
        </p>
        <p className="text-sm text-neutral-500">
          Quantity:{" "}
          <span className="text-neutral-800 text-base">
            {data?.totalQuantity}
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-neutral-500">
          Discount:{" "}
          <span className="text-neutral-800 text-base">
            {dollars(data?.discountedTotal)}
          </span>
        </p>

        <h5 className="text-sm text-neutral-500">
          Total:{" "}
          <span className="text-base font-bold text-neutral-400 line-through">
            {dollars(data?.total)}
          </span>
        </h5>

        <h1 className="text-2xl font-bold text-neutral-800">
          {dollars(data?.discountedTotal)}
        </h1>
      </div>
    </div>
  );
};

export default Desc;
