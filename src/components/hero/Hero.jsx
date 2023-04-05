import { useSelector } from "react-redux";
import { WrapperContent } from "../wrapper";
import CardContainer from "./CardContainer";
import { useOutletContext } from "react-router-dom";
import LiveScreen from "./LiveScreen";

const Hero = () => {
  const live = useOutletContext();
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
        {live ? <LiveScreen /> : data && <CardContainer heroData={data[0]} />}
      </WrapperContent>
    </div>
  );
};

export default Hero;
