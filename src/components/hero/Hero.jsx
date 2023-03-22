import { WrapperContent } from "../wrapper";
import CardContainer from "./CardContainer";

const Hero = () => {
  return (
    <div className="bg-[url('./images/hero.jpg')] bg-no-repeat relative bg-cover bg-center h-[60vh]">
      <WrapperContent>
        <CardContainer />
      </WrapperContent>
    </div>
  );
};

export default Hero;
