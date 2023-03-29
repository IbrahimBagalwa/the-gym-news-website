import { Link } from "react-router-dom";
import convertDateIntoHours from "../../utils/utils";

const NewsItem = ({ category, country, language, name, url }) => {
  return (
    <div className="">
      <span className="text-[#5c666e] text-xs">
        {category} {language} {country}
      </span>
      <h2 className="text-[#002d5a] text-xl hover:underline">
        <Link to={url}>{name}</Link>
      </h2>
    </div>
  );
};

export default NewsItem;
