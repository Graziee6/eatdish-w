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
  numberOfMoreRecipes
}) {
  return (
    <div className="bg-white h-max p-4 w-1/2 rounded-2xl mr-4">
      {/* top div */}
      <div className="w-full grid grid-cols-4 gap-1 py-4">
        <div className="rounded-full col-span-2">
          <img src={image} alt={altText} className="h-16 w-16 rounded-full" />
        </div>

        <div className="col-span-2">
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
          <div className="bg-slate-100 rounded-2xl h-24 flex flex-row justify-center items-center">
            <p className="text-amber-500 capitalize text-sm cursor-pointer">
              {numberOfMoreRecipes}+ more
            </p>
          </div>
        </div>
      </div>

      {/* bottom div */}
      <div className="h-8 w-full flex flex-row gap-1 justify-between align-middle">
        {/* play */}
        <div className="rounded-full bg-amber-500 p-2 flex justify-between gap-1 cursor-pointer">
          <div className="h-4 w-4 rounded-full bg-white flex flex-col items-center justify-center">
            <BsPlayFill size={18} className="text-amber-500" />
          </div>

          <div>
            <p className="capitalize font-light text-sm text-white">
              Watch tutorial
            </p>
          </div>
        </div>

        {/* time */}
        <div className="flex gap-1 text-sm text-stone-500">
          <MdOutlineWatchLater size={18} />
          <p>15 mins</p>
        </div>
      </div>
    </div>
  );
}

export default card;
