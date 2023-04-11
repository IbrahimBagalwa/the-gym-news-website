import { Link } from "react-router-dom";
import convertDateIntoHours from "../../utils/utils";

const HeroHeader = ({ heroData }) => {
  let date = heroData?.publishedAt;
  return (
    <div className="text-white mb-4">
      <h1 className="text-5xl text-left">
        <Link to={heroData && heroData?.url} className="hover:underline">
          {heroData && heroData?.title}
        </Link>
      </h1>
      <div className="flex items-center justify-start gap-4 capitalize">
        <p>published At :</p>
        <p>{convertDateIntoHours(date)}</p>
      </div>
    </div>
  );
};

export default HeroHeader;
