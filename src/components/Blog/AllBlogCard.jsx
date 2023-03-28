import React from "react";
import { useSelector } from "react-redux";
import { BlogCard } from "../ui";
import { WrapperContent } from "../wrapper";

const AllBlogCard = () => {
  const { articles } = useSelector((state) => state.news);
  return (
    <div className="bg-[#F1F3F5] pt-10 pb-8">
      <WrapperContent styles="flex gap-8">
        {articles.slice(7, 10).map((article, index) => {
          return <BlogCard {...article} key={index} />;
        })}
      </WrapperContent>
    </div>
  );
};

export default AllBlogCard;
