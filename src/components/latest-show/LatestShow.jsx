import { Fragment } from "react";
import { useSelector } from "react-redux";
import convertDateIntoHours from "../../utils/utils";
import { WrapperContent } from "../wrapper";
import bigImage from "/images/bi-im.jpg";

const LatestShow = () => {
  const { newsArticlesFiltered } = useSelector((state) => state.news);
  return (
    <div className="bg-[#323C45] pt-8 pb-6">
      <h1 className="mx-auto max-w-[1140px] text-[#d8dde2] text-3xl uppercase font-bold mb-6">
        Lastest Show
      </h1>
      <WrapperContent styles="grid grid-cols-3">
        {newsArticlesFiltered &&
          newsArticlesFiltered.slice(10, 11).map((article, index) => {
            return (
              <Fragment key={index}>
                <img
                  src={article.urlToImage}
                  alt="big-image"
                  className="col-span-2 w-full cursor-pointer h-[480px]"
                />
                <div className="bg-black px-10 py-4 grid h-full">
                  <div>
                    <h2 className="text-white text-4xl cursor-pointer hover:underline mb-4">
                      {article.title}
                    </h2>
                    <p className="text-[#d8dde2] text-sm text-4xl font-bold">
                      {article.content}
                    </p>
                  </div>
                  <div className="divide-x-2 text-xs text-[#b2bcc5] self-end">
                    <span className="">
                      {convertDateIntoHours(article.publishedAt)}
                    </span>
                  </div>
                </div>
              </Fragment>
            );
          })}
      </WrapperContent>
    </div>
  );
};

export default LatestShow;
