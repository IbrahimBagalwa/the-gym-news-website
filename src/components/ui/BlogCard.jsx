import React from "react";
import { Link } from "react-router-dom";
import convertDateIntoHours from "../../utils/utils";

export const BlogCard = ({ title, urlToImage, url, publishedAt, content }) => {
  return (
    <div className="flex flex-col gap-4 text-[#3b444d]">
      <p className="text-lg uppercase font-bold text-[#5c666e]">Middle East</p>
      <Link to={url} className=" cursor-pointer hover:group hover:underline">
        <img src={urlToImage} alt="newsimage" className="w-[355px] h-[186px]" />
        <h2 className="text-2xl font-bold">{title}</h2>
      </Link>
      <p>{content}</p>
      <div className="flex gap-x-2 divide-x-2">
        <span>Natural</span>
        <span className="pl-2">{convertDateIntoHours(publishedAt)}</span>
      </div>
    </div>
  );
};
