import { useSelector } from "react-redux";
import { BigBlogCard } from "../ui";
import { WrapperContent } from "../wrapper";

const AllBigBlogCard = () => {
  const { newsArticlesFiltered } = useSelector((state) => state.news);
  return (
    <div className="bg-[#F1F3F5] pt-10 md:px-0 px-10">
      <WrapperContent styles="grid lg:grid-cols-2 grid-cols-1 items-center- justify-center- md:gap-8-">
        {newsArticlesFiltered &&
          newsArticlesFiltered?.slice(3, 7).map((article, index) => {
            return <BigBlogCard {...article} key={index} />;
          })}
      </WrapperContent>
    </div>
  );
};

export default AllBigBlogCard;
