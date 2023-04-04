import { useSelector } from "react-redux";
import { WrapperContent } from "../wrapper";
import CardContainer from "./CardContainer";

const Hero = () => {
  const { newsArticlesFiltered } = useSelector((state) => state.news);
  const data =
    newsArticlesFiltered &&
    newsArticlesFiltered.slice(0, 1).map((artImage) => artImage);

  return (
    <div
      style={{ backgroundImage: `url(${data && data[0]?.urlToImage})` }}
      className="bg-no-repeat relative bg-cover bg-center h-[60vh] lg:block hidden"
    >
      <WrapperContent>
        {data && <CardContainer heroData={data[0]} />}
      </WrapperContent>
    </div>
  );
};

export default Hero;
