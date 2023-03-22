import React from "react";

export const BlogCard = () => {
  return (
    <div className="flex flex-col gap-4 p-6 text-[#3b444d]">
      <p className="text-lg uppercase font-bold text-[#5c666e]">Middle East</p>
      <img src="https://static.dw.com/image/64071384_602.jpg" alt="newsimage" />
      <a className="text-2xl font-bold hover:underline">
        New hope for football in the Middle East
      </a>
      <p>
        The re-establishment of diplomatic relations between Saudi Arabia and
        Iran could benefit football in both countries.
      </p>
      <div className="flex gap-x-2 divide-x-4">
        <span>Natural</span>
        <span className="pl-2">4hrs</span>
      </div>
    </div>
  );
};
