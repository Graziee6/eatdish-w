import React from "react";
import LilCard from "./lilCard";
import { BsPlayFill } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";

function card({
  image,
  altText,
  name,
  cal,
  imgSrc1,
  imgAlt1,
  imgSrc2,
  imgAlt2,
  imgSrc3,
  imgAlt3,
  imgSrc4,
  imgAlt4,
  imgSrc5,
  imgAlt5,
}) {
  return (
    <div className="bg-white h-max p-4 w-1/2 rounded-2xl mr-4">
      {/* top div */}
      <div className="grid grid-cols-2 gap-1 h-2/6 py-4">
        <img src={image} alt={altText} />
        <div>
          <p className="text-indigo-950 text-sm font-semibold capitalize">
            {name}
          </p>
          <p className="text-stone-500 text-xs">{cal}cal</p>
        </div>
      </div>

      {/* middle div */}
      <div className="h-3/6 py-2">
        <p className="text-indigo-950 text-sm font-semibold capitalize">
          ingredients
        </p>
        <div className="grid grid-cols-3 gap-2 mb-2">
          <LilCard imgSrc={imgSrc1} imgAlt={imgAlt1} item={imgAlt1} />
          <LilCard imgSrc={imgSrc2} imgAlt={imgAlt2} item={imgAlt2} />
          <LilCard imgSrc={imgSrc3} imgAlt={imgAlt3} item={imgAlt3} />
          <LilCard imgSrc={imgSrc4} imgAlt={imgAlt4} item={imgAlt4} />
          <LilCard imgSrc={imgSrc5} imgAlt={imgAlt5} item={imgAlt5} />
          <div className="bg-slate-100 rounded-2xl h-24 p-2 grid grid-rows-2 gap-0.5 justify-center align-middle text-center">
            <p className="text-amber-500 capitalize text-sm cursor-pointer leading-loose">
              3+ more
            </p>
          </div>
        </div>
      </div>

      {/* bottom div */}
      <div className="grid grid-flow-col-dense grid-cols-2 gap-1">
        {/* play */}
        <div className="rounded-full bg-amber-500 p-2 grid grid-cols-5 gap-1">
          <div className="w-6 h-6 rounded-full bg-white p-1 align-middle justify-center col-span-1">
            <BsPlayFill size={18} className="text-amber-500" />
          </div>

          <div className="col-span-4">
            <p className="capitalize font-light text-sm text-white leading-relaxed">
              Watch tutorial
            </p>
          </div>
        </div>

        {/* time */}
        <div className="justify-center align-middle grid grid-cols-4 gap-0.5 text-stone-500">
          <MdOutlineWatchLater size={20} className="col-span-1" />
          <p className="col-span-3">15 mins</p>
        </div>
      </div>
    </div>
  );
}

export default card;
