import React from "react";
import { BlogCard } from "../ui";

const AllBlogCard = () => {
  return (
    <div className="flex gap-x-4">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default AllBlogCard;
