"use client";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart} from "react-icons/fa";
import { LiaClipboardListSolid } from "react-icons/lia";

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, isOpenSet] = useState(false);

  return (
    <header className="relative bg-blue-50 md:min-h-screen md:min-w-[200px]
    border-gray-200 dark:bg-gray-900">
      <nav
        className="max-w-screen-xl
        flex md:flex-col gap-20 items-center justify-between 
        mx-auto p-4 md:px-8"
      >
        <a className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Dealls
          </span>
        </a>

        <Hamburger isOpen={isOpen} isOpenSet={isOpenSet} />

        <div className="hidden w-full h-full md:flex">
          <ul
            className="font-medium 
            flex flex-col mt-4 gap-10
            border border-gray-100
            md:mt-0 md:border-0
            dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <Link
              className={`py-3 transition-all flex items-center gap-3 text-neutral-500 ${
                pathName === "/" && "text-xl font-bold transition-all text-neutral-800"
              }`}
              href={"/"}
            >
              <LiaClipboardListSolid />
              Products
            </Link>

            <Link
              className={`py-3 transition-all flex items-center gap-3 text-neutral-500 ${
                pathName === "/carts" && "text-xl font-bold transition-all text-neutral-800"
              } `}
              href={"/carts"}
            >
              <FaShoppingCart />
              Carts
            </Link>
          </ul>
        </div>
      </nav>

      <span className="h-full w-4 bg-black" />

      {/* modal nav */}
      <nav
        className={`absolute bg-white shadow-md md:hidden
        ${isOpen ? "-bottom-28 z-10" : "bottom-0 -z-10 opacity-0"} 
        left-0 w-full
        flex flex-col p-2
        transition-all delay-100`}
      >
        <Link href={"/"} className="p-3" onClick={() => isOpenSet(!isOpen)}>
          Product
        </Link>
        <hr />
        <Link href={"/carts"} className="p-3" onClick={() => isOpenSet(!isOpen)}>
          Carts
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
