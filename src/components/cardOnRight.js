import React from "react";
import { BsPlayFill } from "react-icons/bs";

function cardOnRight({ imgSrc, imgAlt, heading, p, timing }) {
  return (
    <div className="bg-orange-50 rounded-2xl p-2 flex-row gap-1 h-72 justify-center">
      <div>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-24 h-24 mx-auto rounded-full"
        />
      </div>
      <div className="text-md font-semibold mb-6 w-3/4 h-24">
        <h2 className="text-indigo-950 py-2 h-2/3">{heading}</h2>
        <p className="text-stone-500 capitalize text-xs row-span-1 mx-auto h-1/3">
          {p}
        </p>
      </div>

      <div className="flex gap-3">
        <div className="w-6 h-1/3 rounded-full bg-amber-500 p-1 align-middle justify-center">
          <BsPlayFill size={18} className="text-white" />
        </div>
        <div className="text-stone-500">
          <p>{timing} mins</p>
        </div>
      </div>
    </div>
  );
}

export default cardOnRight;
