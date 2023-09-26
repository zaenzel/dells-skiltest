"use client";
import { dollars } from "@/utils/helper";
import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";

const CardCustom = ({ item }) => {
  return (
    <Card className="relative bg-gradient-to-tr from-blue-200 to-white">
      <h4 className="font-medium text-lg text-neutral-700">{item.title}</h4>

      <p className="text-sm text-neutral-500">
        price:{" "}
        <span className="text-neutral-800 text-base">
          {dollars(item.price)}
        </span>
      </p>
      <p className="text-sm text-neutral-500">
        Qty: <span className="text-neutral-800 text-base">{item.quantity}</span>
      </p>
      <div className="flex items-end gap-2">
        <p className="text-sm text-neutral-500">Total:</p>
        <h1 className="text-base font-bold text-neutral-400 line-through">
          {dollars(item.total)}
        </h1>
      </div>
      <h1 className="text-2xl font-bold text-neutral-800">
        {dollars(item.discountedPrice)}
      </h1>
    </Card>
  );
};

export default CardCustom;
