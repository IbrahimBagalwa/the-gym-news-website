import { useSelector } from "react-redux";
import { BigBlogCard } from "../ui";
import { WrapperContent } from "../wrapper";
import Skeleton from "./Skeleton";
import { RootStore } from "../../redux/store/store";
import { ArticleData } from "../../redux/slices/publisher";

const AllBigBlogCard = () => {
  const { newsArticlesFiltered, loading } = useSelector(
    (state: RootStore) => state.news
  );
  return (
    <div className="bg-[#F1F3F5] pt-10 md:px-0 px-10">
      <WrapperContent styles="grid lg:grid-cols-2 grid-cols-1">
        {loading
          ? Array(4)
              .fill()
              .map((_, i) => <Skeleton key={i} />)
          : newsArticlesFiltered &&
            newsArticlesFiltered
              ?.slice(3, 7)
              .map((article: ArticleData, index: number) => {
                return <BigBlogCard {...article} key={index} />;
              })}
      </WrapperContent>
    </div>
  );
};

export default AllBigBlogCard;
