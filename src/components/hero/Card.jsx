import { Link } from "react-router-dom";
import convertDateIntoHours from "../../utils/utils";
import testImage from "/images/testImage.jpg";
const Card = ({ title, urlToImage, url, publishedAt }) => {
  return (
    <div className="flex text-white gap-2 px-10 z-50 hover-group">
      <img
        src={urlToImage}
        alt="test-image"
        className="cursor-pointer w-[201px] h-[113px]"
      />
      <div>
        <Link to={url} className="hover:underline cursor-pointer">
          {title}
        </Link>
        <p className="text-gray-400 text-xs">
          <span>Published At </span>
          <span>{convertDateIntoHours(publishedAt)} ago</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
