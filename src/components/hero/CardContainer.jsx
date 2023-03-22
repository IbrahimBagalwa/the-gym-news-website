import Card from "./Card";
import HeroHeader from "./HeroHeader";

const CardContainer = () => {
  return (
    <section className="absolute -bottom-[42rem]">
      <HeroHeader />
      <div className="w-full bg-[#323C45] flex items-center justify-center py-6 gap-8">
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default CardContainer;
