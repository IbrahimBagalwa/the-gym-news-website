import { useSelector } from "react-redux";
import Card from "./Card";
import HeroHeader from "./HeroHeader";

const CardContainer = ({ heroData }) => {
  const { newsArticlesFiltered } = useSelector((state) => state.news);
  return (
    <section className="absolute -bottom-[42rem] z-50">
      <HeroHeader heroData={heroData} />
      <div className=" bg-[#323C45] md:flex items-center justify-center py-6 gap-8">
        {newsArticlesFiltered.slice(0, 2).map((article, index) => {
          return <Card {...article} key={index} />;
        })}
      </div>
    </section>
  );
};

export default CardContainer;
