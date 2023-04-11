import { useSelector } from "react-redux";
import { BlogCard } from "../ui";
import { WrapperContent } from "../wrapper";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const AllBlogCard = () => {
  const { newsArticlesFiltered, loading } = useSelector((state) => state.news);
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  const [value, setValue] = useState(10);

  useEffect(() => {
    const handleResize = () => setSizeScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setValue(sizeScreen <= 1123 ? 13 : 10);
  }, [sizeScreen]);

  return (
    <div className="bg-[#F1F3F5] pt-10 px-10 lg:px-0 md:px-20 pb-8">
      <WrapperContent styles="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {loading
          ? Array(3)
              .fill()
              .map((_, id) => {
                return <Skeleton key={id} />;
              })
          : newsArticlesFiltered &&
            newsArticlesFiltered?.slice(7, value).map((article, index) => {
              return <BlogCard {...article} key={index} />;
            })}
      </WrapperContent>
    </div>
  );
};

export default AllBlogCard;
