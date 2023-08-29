import React from "react";

const iconBar = ({ icon: Icon, text }) => {
  return (
    <div className="w-full flex bg-white rounded-full p-2 mb-2">
      {/* icon */}
      <div className="px-2">
        <Icon size={24} className="text-stone-500 text-sm" />
      </div>
      {/* text */}

      <input
        type="text" className="outline-none text-stone-500 text-sm border-0 bg-transparent"
        placeholder={text}
      />
    </div>
  );
};

export default iconBar;
