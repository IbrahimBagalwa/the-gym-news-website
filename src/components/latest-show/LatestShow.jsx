import { useSelector } from "react-redux";
import convertDateIntoHours from "../../utils/utils";
import { WrapperContent } from "../wrapper";

const LatestShow = () => {
  const { newsArticlesFiltered } = useSelector((state) => state.news);
  return (
    <div className="bg-[#323C45] pt-8 pb-6">
      <h1 className="mx-auto max-w-[1140px] text-[#d8dde2] text-3xl uppercase font-bold mb-6 lg:px-0 px-2">
        Lastest Show
      </h1>
      <WrapperContent styles="grid- grid-cols-2-">
        {newsArticlesFiltered &&
          newsArticlesFiltered.slice(10, 11).map((article, index) => {
            return (
              <div key={index} className="grid lg:grid-cols-3">
                <img
                  src={article.urlToImage}
                  alt="big-image"
                  className="w-full lg:col-span-2 cursor-pointer lg:h-[480px]"
                />
                <div className="bg-black px-4 lg:px-10 py-4 grid h-full">
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
              </div>
            );
          })}
      </WrapperContent>
    </div>
  );
};

export default LatestShow;
