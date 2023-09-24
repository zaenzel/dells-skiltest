import { dollars } from "@/utils/helper";
import React from "react";

const Desc = ({ data }) => {
  return (
    <>
      <h5 className="text-sm text-neutral-500">
        order ID: <span className="text-neutral-800 text-base">{data?.id}</span>{" "}
      </h5>
      <div className="flex justify-between">
        <p className="text-sm text-neutral-500">
          Total Product:{" "}
          <span className="text-neutral-800 text-base">
            {data?.totalProducts}
          </span>
        </p>
        <p className="text-sm text-neutral-500">
          Qty:{" "}
          <span className="text-neutral-800 text-base">
            {data?.totalQuantity}
          </span>
        </p>
      </div>
      <div className="flex justify-between">
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
    </>
  );
};

export default Desc;
