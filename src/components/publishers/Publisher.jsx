import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../redux/slices/articles";
import { WrapperContent } from "../wrapper";
import { BigBlogCard } from "../ui";

const Publisher = () => {
  const { publisherID } = useParams();
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.news);
  const filterArticleByPublisher = articles.filter(
    (article) => article.source.name === publisherID
  );

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  return (
    <div className="bg-[#F1F3F5] pt-10 pb-8">
      <WrapperContent styles="grid grid-cols-2 items-center justify-center gap-8">
        {filterArticleByPublisher.length === 0
          ? "no item"
          : filterArticleByPublisher?.map((article, index) => {
              return <BigBlogCard {...article} key={index} />;
            })}
      </WrapperContent>
    </div>
  );
};

export default Publisher;
