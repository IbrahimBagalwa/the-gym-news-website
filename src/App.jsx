import { Footer, Header } from "./components/header";
import { Hero } from "./components/hero";
import AllBlogCard from "./components/Blog/AllBlogCard";
import { WrapperContainer } from "./components/wrapper";
import { AllBigBlogCard } from "./components/Blog";
import { News } from "./components/news";
import { GetAllShow, LatestShow } from "./components/latest-show";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, filterArticleNews } from "./redux/slices/articles";
import { Routes } from "react-router-dom";
import { Router } from "react-router-dom";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Publisher from "./components/publishers/Publisher";

function App() {
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const searchField = e.target.value.toLowerCase();
    dispatch(filterArticleNews(searchField));
  };
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <div className="bg-[#212529]">
      <WrapperContainer>
        <Routes>
          <Route
            path="/"
            element={<Header onChangeHandler={onChangeHandler} />}
          >
            <Route index element={<Home />} />
            <Route path="publisher-news" element={<Publisher />} />
          </Route>
        </Routes>
      </WrapperContainer>
    </div>
  );
}

export default App;
