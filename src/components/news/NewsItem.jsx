import { Link } from "react-router-dom";
import convertDateIntoHours from "../../utils/utils";

const NewsItem = ({ source, publishedAt, url }) => {
  return (
    <div className="">
      <span className="text-[#5c666e] text-xs">
        {convertDateIntoHours(publishedAt)}
      </span>
      <h2 className="text-[#002d5a] text-xl hover:underline">
        <Link to={url}>{source.name}</Link>
      </h2>
    </div>
  );
};

export default NewsItem;
