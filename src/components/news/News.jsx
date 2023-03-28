import { useSelector } from "react-redux";
import { WrapperContent } from "../wrapper";
import NewsItem from "./NewsItem";

const News = () => {
  const { articles } = useSelector((state) => state.news);
  return (
    <div className="pt-32">
      <h1 className="mx-auto max-w-[1140px] text-[#3b444d] text-2xl font-bold mb-6 capitalize">
        News publishers
      </h1>
      <WrapperContent styles="grid grid-cols-3 gap-8 mb-8 items-center w-full">
        {articles.slice(0, 9).map((article, index) => {
          console.log(article);
          return <NewsItem key={index} {...article} />;
        })}
      </WrapperContent>
      <button className="flex items-center justify-center bg-[#D8DDE2] text-[#002D5A] hover:ring-1 ring-[#002D5A] mx-auto mb-4 px-8 py-4">
        <span>Show more</span> <i className="ri-arrow-down-s-line ri-xl"></i>
      </button>
    </div>
  );
};

export default News;
