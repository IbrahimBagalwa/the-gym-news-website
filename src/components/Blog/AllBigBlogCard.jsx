import { useSelector } from "react-redux";
import { BigBlogCard } from "../ui";
import { WrapperContent } from "../wrapper";

const AllBigBlogCard = () => {
  const { newsArticlesFiltered } = useSelector((state) => state.news);
  return (
    <div className="bg-[#F1F3F5] pt-10">
      <WrapperContent styles="grid grid-cols-2 items-center justify-center gap-8">
        {newsArticlesFiltered &&
          newsArticlesFiltered?.slice(3, 7).map((article, index) => {
            return <BigBlogCard {...article} key={index} />;
          })}
      </WrapperContent>
    </div>
  );
};

export default AllBigBlogCard;
