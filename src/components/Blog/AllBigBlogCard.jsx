import { BigBlogCard } from "../ui";
import { WrapperContent } from "../wrapper";

const AllBigBlogCard = () => {
  return (
    <div className="bg-[#F1F3F5] pt-10">
      <WrapperContent styles="grid grid-cols-2 items-center justify-center gap-8">
        <BigBlogCard />
        <BigBlogCard />
        <BigBlogCard />
        <BigBlogCard />
      </WrapperContent>
    </div>
  );
};

export default AllBigBlogCard;
