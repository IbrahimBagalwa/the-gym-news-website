import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WrapperContent } from "../wrapper";
import { BigBlogCard } from "../ui";
import YoutubeMagic from "./SketonPublication";

const Publisher = () => {
  const { publisherID } = useParams();
  const [filterArticleByPublisher, setFilterByPublisher] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchSingle = async () => {
    const res = await fetch(
      `https://news-proxy.netlify.app/api/everything?sources=${publisherID}&apiKey=e29300599c8f4278833919cec88eefec`
    );
    const data = await res.json();
    setFilterByPublisher(data.articles);
    setLoading(false);
  };
  useEffect(() => {
    fetchSingle();
  }, [publisherID]);
  return (
    <div className="bg-[#F1F3F5] pt-10 pb-8">
      <WrapperContent styles="grid grid-cols-3 items-center justify-center gap-8">
        {loading ? (
          <YoutubeMagic />
        ) : (
          filterArticleByPublisher?.map((article, index) => {
            return <BigBlogCard {...article} key={index} />;
          })
        )}
      </WrapperContent>
    </div>
  );
};

export default Publisher;
