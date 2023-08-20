import React from "react";

function navItem({ icon: Icon, text }) {
  return (
    <div className="grid grid-cols-4 cursor-pointer text-stone-500 active:text-indigo-950 py-6">
      <Icon size={20} className="text-stone-500 active:text-indigo-950" />
      <p className="capitalize font-semibold text-sm active:text-indigo-950">{text}</p>
    </div>
  );
}

export default navItem;
