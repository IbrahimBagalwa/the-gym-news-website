import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSources } from "../../redux/slices/publisher";
import { WrapperContent } from "../wrapper";
import NewsItem from "./NewsItem";
import SkeletonNews from "./SkeletonNews";

const News = () => {
  const dispatch = useDispatch();
  const { sourcesArticle, loading } = useSelector((state) => state.publishers);
  const [showPublishers, setShowPublishers] = useState([]);
  const refContainer = useRef(null);
  useEffect(() => {
    dispatch(fetchSources());
  }, []);

  useEffect(() => {
    setShowPublishers(sourcesArticle.slice(0, 12));
  }, [sourcesArticle]);

  const displayAllPulisher = () => {
    if (showPublishers.length < 13) {
      setShowPublishers(sourcesArticle.slice(13, 93));
    } else {
      setShowPublishers(sourcesArticle.slice(0, 12));
      refContainer.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-32 px-10 md:px-20" ref={refContainer}>
      <h1 className="mx-auto max-w-[1140px] text-[#3b444d] text-2xl font-bold mb-6 capitalize">
        News publishers
      </h1>
      <WrapperContent styles="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mb-8 items-center w-full">
        {loading ? (
          <SkeletonNews />
        ) : (
          showPublishers.map((article) => {
            return <NewsItem key={article.id} {...article} />;
          })
        )}
      </WrapperContent>
      <button
        className="flex items-center justify-center bg-[#D8DDE2] text-[#002D5A] hover:ring-1 ring-[#002D5A] mx-auto mb-4 px-8 py-4"
        onClick={displayAllPulisher}
      >
        <span className="flex items-center">
          {showPublishers.length < 13 ? "Show more" : "Show less"}
          {showPublishers.length < 13 ? (
            <i className="ri-arrow-down-s-line ri-xl"></i>
          ) : (
            <i className="ri-arrow-up-s-line ri-xl"></i>
          )}
        </span>
      </button>
    </div>
  );
};

export default News;
