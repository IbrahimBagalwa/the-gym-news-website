import { Fragment } from "react";
import { Hero } from "../components/hero";
import { News } from "../components/news";
import { AllBigBlogCard, AllBlogCard } from "../components/Blog";
import { GetAllShow, LatestShow } from "../components/latest-show";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <div className="bg-white">
        <News />
        <AllBigBlogCard />
        <AllBlogCard />
        <LatestShow />
        <GetAllShow />
      </div>
    </Fragment>
  );
};

export default Home;
