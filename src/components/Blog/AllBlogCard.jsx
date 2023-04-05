import React from "react";
import { useSelector } from "react-redux";
import { BlogCard } from "../ui";
import { WrapperContent } from "../wrapper";

const AllBlogCard = () => {
  const { newsArticlesFiltered } = useSelector((state) => state.news);
  return (
    <div className="bg-[#F1F3F5] pt-10 px-10 md:px-0 pb-8">
      <WrapperContent styles="grid md:grid-cols-3 gap-8">
        {newsArticlesFiltered &&
          newsArticlesFiltered?.slice(7, 10).map((article, index) => {
            return <BlogCard {...article} key={index} />;
          })}
      </WrapperContent>
    </div>
  );
};

export default AllBlogCard;
