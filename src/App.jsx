import { Footer, Header } from "./components/header";
import { Hero } from "./components/hero";
import AllBlogCard from "./components/Blog/AllBlogCard";
import { WrapperContainer } from "./components/wrapper";
import { AllBigBlogCard } from "./components/Blog";
import { News } from "./components/news";
import { GetAllShow, LatestShow } from "./components/latest-show";

function App() {
  return (
    <div className="bg-[#212529]">
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
    </div>
  );
}

export default App;
