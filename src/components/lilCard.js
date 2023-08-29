import React from "react";

function lilCard({ imgSrc, imgAlt, item }) {
  return (
    <div className="bg-orange-50 rounded-2xl h-24 p-2 flex-row justify-between text-center gap-1">
      <div className="flex justify-center">
        <img src={imgSrc} alt={imgAlt} className="bg-orange-50 h-12" />
      </div>
      {/* name */}
      <div className="h-12 text-stone-500 capitalize text-sm">
        <p>{item}</p>
      </div>
    </div>
  );
}

export default lilCard;
