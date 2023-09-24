import React from "react";

const Hamburger = ({ isOpenSet, isOpen }) => {
  return (
    <button
      type="button"
      className="flex flex-col gap-1 md:hidden z-20"
      onClick={() => isOpenSet(!isOpen)}
    >
      <span
        className={`w-6 h-1 bg-neutral-700 origin-top-left transition-transform ease-in-out duration-300
    ${
      isOpen &&
      "rotate-45 origin-top-left transition-transform ease-in-out duration-300"
    }`}
      />
      <span
        className={`w-6 h-1 bg-neutral-700 origin-top-left transition-transform ease-in-out duration-300
    ${isOpen && "scale-0 origin-left transition-all ease-in-out duration-300"}`}
      />
      <span
        className={`w-6 h-1 bg-neutral-700 origin-bottom-left transition-transform ease-in-out duration-300
    ${
      isOpen &&
      "-rotate-45 origin-bottom-left transition-transform ease-in-out duration-300"
    }`}
      />
    </button>
  );
};

export default Hamburger;
