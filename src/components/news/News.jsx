import { WrapperContent } from "../wrapper";
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <div className="pt-32">
      <h1 className="mx-auto max-w-[1140px] text-[#3b444d] text-2xl font-bold mb-6">
        News
      </h1>
      <WrapperContent styles="grid grid-cols-3 gap-8 mb-8">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </WrapperContent>
      <button className="flex items-center justify-center bg-[#D8DDE2] text-[#002D5A] hover:ring-1 ring-[#002D5A] mx-auto mb-4 px-8 py-4">
        <span>Show more</span> <i className="ri-arrow-down-s-line ri-xl"></i>
      </button>
    </div>
  );
};

export default News;
