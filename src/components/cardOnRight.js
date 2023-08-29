import React from "react";
import { BsPlayFill } from "react-icons/bs";

function cardOnRight({ imgSrc, imgAlt, heading, p, timing }) {
  return (
    <div className="bg-orange-50 w-36 rounded-2xl p-2 gap-1 h-72 flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-24 h-24 rounded-full relative bottom-8"
        />
      </div>
      <div className="text-md font-semibold mb-6 w-full h-24 flex flex-col items-start">
        <h2 className="text-indigo-950 py-2">{heading}</h2>
        <p className="text-stone-500 capitalize text-xs">
          {p}
        </p>
      </div>

      <div className="w-full flex justify-start gap-2 align-middle items-start">
        <div className="w-6 h-6 rounded-full bg-amber-500 flex flex-col items-center justify-center cursor-pointer">
          <BsPlayFill size={18} className="text-white" />
        </div>
        <div className="text-stone-500 text-sm">
          <p>{timing} mins</p>
        </div>
      </div>
    </div>
  );
}

export default cardOnRight;
