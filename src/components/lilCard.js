import React from "react";

function lilCard({ imgSrc, imgAlt, item }) {
  return (
    <div className="bg-orange-50 rounded-2xl h-24 p-2 flex-row gap-3 justify-center align-center text-center">
      <div className="flex justify-center">
        <img src={imgSrc} alt={imgAlt} className="bg-orange-50 h-12" />
      </div>
      {/* name */}
      <div className="h-12 text-stone-500 capitalize text-sm flex justify-center align-center">
        <p>{item}</p>
      </div>
    </div>
  );
}

export default lilCard;
