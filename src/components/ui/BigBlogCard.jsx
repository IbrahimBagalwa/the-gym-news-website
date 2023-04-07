import { Link } from "react-router-dom";
import convertDateIntoHours from "../../utils/utils";
const BigBlogCard = ({ title, urlToImage, url, publishedAt, content }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 md:px-20 lg:px-0">
      <h1 className="uppercase text-[#3b444d]">Africa</h1>
      <Link to={url} className="hover:group hover:underline cursor-pointer">
        <img
          src={urlToImage}
          alt="big-image"
          className="lg:h-[307px] lg:w-[545px] md:w-full md:h-full"
        />
        <h2 className="text-[#002D5A] hover:underline lg:text-4xl cursor-pointer lg:h-[105px] lg:mb-20">
          {title}
        </h2>
      </Link>
      <div>
        <p className="text-[#3b444d] text-sm mb-2 md:mt-6 ld:mt-0 md:block hidden">
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
