import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSources } from "../../redux/slices/articles";
import { WrapperContent } from "../wrapper";
import NewsItem from "./NewsItem";
import { Link } from "react-router-dom";

const News = () => {
  const dispatch = useDispatch();
  const { sourcesArticle } = useSelector((state) => state.news);
  const [showPublishers, setShowPublishers] = useState(
    sourcesArticle.slice(0, 9)
  );
  const refContainer = useRef(null);

  useEffect(() => {
    dispatch(fetchSources());
  }, [dispatch]);

  const displayAllPulisher = () => {
    if (showPublishers.length < 10) {
      setShowPublishers(sourcesArticle.slice(10, 90));
    } else {
      setShowPublishers(sourcesArticle.slice(0, 9));
      refContainer.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="pt-32" ref={refContainer}>
      <h1 className="mx-auto max-w-[1140px] text-[#3b444d] text-2xl font-bold mb-6 capitalize">
        News publishers
      </h1>

      <WrapperContent styles="grid grid-cols-3 gap-8 mb-8 items-center w-full">
        {showPublishers.map((article) => {
          return <NewsItem key={article.id} {...article} />;
        })}
      </WrapperContent>
      <button
        className="flex items-center justify-center bg-[#D8DDE2] text-[#002D5A] hover:ring-1 ring-[#002D5A] mx-auto mb-4 px-8 py-4"
        onClick={displayAllPulisher}
      >
        <span>{showPublishers.length > 10 ? "Show more" : "Show less"}</span>
        <i className="ri-arrow-down-s-line ri-xl"></i>
      </button>
    </div>
  );
};

export default News;
