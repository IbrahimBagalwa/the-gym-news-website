import React from "react";

export const BlogCard = () => {
  return (
    <div className="flex flex-col gap-4 text-[#3b444d]">
      <p className="text-lg uppercase font-bold text-[#5c666e]">Middle East</p>
      <div className=" cursor-pointer hover:group hover:underline">
        <img
          src="https://static.dw.com/image/64071384_602.jpg"
          alt="newsimage"
        />
        <h2 className="text-2xl font-bold">
          New hope for football in the Middle East
        </h2>
      </div>
      <p>
        The re-establishment of diplomatic relations between Saudi Arabia and
        Iran could benefit football in both countries.
      </p>
      <div className="flex gap-x-2 divide-x-2">
        <span>Natural</span>
        <span className="pl-2">4hrs</span>
      </div>
    </div>
  );
};
