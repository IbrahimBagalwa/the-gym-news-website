import { Link } from "react-router-dom";
import convertDateIntoHours from "../../utils/utils";
import bigImage from "/images/bi-im.jpg";
const BigBlogCard = ({ title, urlToImage, url, publishedAt, content }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="uppercase text-[#3b444d]">Africa</h1>
      <Link to={url} className="hover:group hover:underline cursor-pointer">
        <img
          src={urlToImage ?? bigImage}
          alt="big-image"
          className="h-[307px] w-[545px]"
        />
        <h2 className="text-[#002D5A] hover:underline lg:text-4xl cursor-pointer lg:h-[105px] md:mb-20">
          {title}
        </h2>
      </Link>
      <div>
        <p className="text-[#3b444d] text-sm mb-2 md:mt-4 mt-2 px-2 lg:block md:hidden">
          {content}
        </p>
        <div className="flex gap-x-2 divide-x-2 text-xs text-[#5c666e]">
          <span className="uppercase">Politics</span>
          <span className="pl-2">{convertDateIntoHours(publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default BigBlogCard;
