import React from "react";
import { BlogCard } from "../ui";
import { WrapperContent } from "../wrapper";

const AllBlogCard = () => {
  return (
    <div className="bg-[#F1F3F5] pt-10 pb-8">
      <WrapperContent styles="flex gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </WrapperContent>
    </div>
  );
};

export default AllBlogCard;
