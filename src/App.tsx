import { Header } from "./components/header";
import { WrapperContainer } from "./components/wrapper";
import { useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { fetchArticles, filterArticleNews } from "./redux/slices/articles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Publisher from "./components/publishers/Publisher";

const App = () => {
  const dispatch = useDispatch();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLowerCase();
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
            <Route path="publisher-news/:publisherID" element={<Publisher />} />
          </Route>
        </Routes>
      </WrapperContainer>
    </div>
  );
};

export default App;
