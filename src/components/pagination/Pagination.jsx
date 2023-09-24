"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

const Pagination = ({ data }) => {
  const { skip, total, limit } = { ...data };
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const upper = skip + 10

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {skip + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {skip + 10}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {total}
        </span>{" "}
        Entries
      </span>

      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={skip === 0 ? true : false}
          type="button"
          className={`flex items-center justify-center
            px-3 h-8 text-sm font-medium text-white rounded-l
            ${
              skip === 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gray-900"
            }
            dark:bg-gray-800 dark:border-gray-700 
            dark:text-gray-400 dark:hover:bg-gray-700 
            dark:hover:text-white`}
          onClick={() => {
            router.push(pathName + "?" + createQueryString("skip", skip - 10));
          }}
        >
          Prev
        </button>

        <button
          className={`flex items-center justify-center
          px-3 h-8 text-sm font-medium text-white  rounded-r
          ${
            upper === total
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-900"
          }
          dark:bg-gray-800 dark:border-gray-700 
          dark:text-gray-400 dark:hover:bg-gray-700
          dark:hover:text-white`}
          onClick={() => {
            router.push(pathName + "?" + createQueryString("skip", skip + 10));
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
