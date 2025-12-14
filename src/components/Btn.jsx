import React from "react";

const Btn = ({ logo, text }) => {
  return (
    <div>
      <button className="w-fit flex items-center gap-2 bg-blue-500 text-white  font-bold px-6 py-4 rounded-3xl">
        {logo}
        {text}
      </button>
    </div>
  );
};

export default Btn;
