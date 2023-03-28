import { useSelector } from "react-redux";
import { WrapperContent } from "../wrapper";
import CardContainer from "./CardContainer";

const Hero = () => {
  const { articles } = useSelector((state) => state.news);
  const data = articles && articles.slice(0, 1).map((artImage) => artImage);

  return (
    <div
      style={{ backgroundImage: `url(${data && data[0]?.urlToImage})` }}
      className={`bg-no-repeat relative bg-cover bg-center h-[60vh]`}
    >
      <WrapperContent>
        {data && <CardContainer heroData={data[0]} />}
      </WrapperContent>
    </div>
  );
};

export default Hero;
