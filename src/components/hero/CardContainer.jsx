import Card from "./Card";
import HeroHeader from "./HeroHeader";

const CardContainer = () => {
  return (
    <section className="absolute -bottom-[42rem] z-50">
      <HeroHeader />
      <div className=" bg-[#323C45] md:flex items-center justify-center py-6 gap-8">
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default CardContainer;
