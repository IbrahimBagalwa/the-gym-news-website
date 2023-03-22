import { Header } from "./components/header";
import { Hero } from "./components/hero";
import AllBlogCard from "./components/Blog/AllBlogCard";
import { WrapperContainer, WrapperContent } from "./components/wrapper";

function App() {
  return (
    <div className="bg-[#212529]">
      <WrapperContainer>
        <Header />
        <Hero />
        <WrapperContent className="bg-[#F1F3F5] mt-24">
          <AllBlogCard />
        </WrapperContent>
      </WrapperContainer>
    </div>
  );
}

export default App;
