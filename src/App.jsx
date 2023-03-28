import { Footer, Header } from "./components/header";
import { Hero } from "./components/hero";
import AllBlogCard from "./components/Blog/AllBlogCard";
import { WrapperContainer } from "./components/wrapper";
import { AllBigBlogCard } from "./components/Blog";
import { News } from "./components/news";
import { GetAllShow, LatestShow } from "./components/latest-show";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "./redux/slices/articles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);
  return (
    <div className="bg-[#212529]">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <WrapperContainer>
          <Header />
          <Hero />
          <div className="bg-white">
            <News />
            <AllBigBlogCard />
            <AllBlogCard />
            <LatestShow />
            <GetAllShow />
            <Footer />
          </div>
        </WrapperContainer>
      </SkeletonTheme>
    </div>
  );
}

export default App;
