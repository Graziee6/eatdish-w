import React from "react";
import { BsPlayFill } from "react-icons/bs";

function cardOnRight({ imgSrc, imgAlt, heading, p, timing }) {
  return (
    <div className="bg-orange-50 rounded-2xl p-2 grid grid-rows-3 justify-center align-middle">
      <div>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="text-md font-semibold mb-6 w-3/4">
        <h2 className="text-indigo-950 py-2">{heading}</h2>
        <p className="text-stone-500 capitalize text-xs row-span-1">{p}</p>
      </div>

      <div className="grid grid-cols-2 gap-0">
        <div className="w-6 h-6 rounded-full bg-amber-500 p-1 align-middle justify-center">
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
