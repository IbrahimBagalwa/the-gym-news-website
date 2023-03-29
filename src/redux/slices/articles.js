import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const defaultState = {
  loading: true,
  articles: [],
  newsArticlesFiltered: [],
  sourcesArticle: [],
  error: "",
};
const APIKEY = "e29300599c8f4278833919cec88eefec";
let uri = `https://newsapi.org/v2/everything?q=keyword&apiKey=${APIKEY}`;
// "https://newsapi.org/v2/everything?q=keyword&apiKey=e29300599c8f4278833919cec88eefec";
export const fetchArticles = createAsyncThunk("article/fetchArticles", () => {
  return fetch(uri)
    .then((res) => res.json())
    .then((data) => data.articles);
});
export const fetchSources = createAsyncThunk("sources/fetchSources", () => {
  return fetch(
    "https://newsapi.org/v2/top-headlines/sources?q=keyword&apiKey=e29300599c8f4278833919cec88eefec"
  )
    .then((res) => res.json())
    .then((data) => data.sources);
});
export const articlesSlices = createSlice({
  name: "news",
  initialState: defaultState,
  reducers: {
    filterArticleNews: (state, action) => {
      const newsArticles = [...state.articles];
      const newFilterArticleNews = newsArticles.filter((article) =>
        article.title.toLowerCase().includes(action.payload)
      );
      state.newsArticlesFiltered = newFilterArticleNews;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload;
      state.newsArticlesFiltered = state.articles;
      state.error = "";
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.loading = false;
      state.articles = [];
      state.error = action.error.message;
    });
    builder.addCase(fetchSources.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSources.fulfilled, (state, action) => {
      state.loading = false;
      state.sourcesArticle = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSources.rejected, (state, action) => {
      state.loading = false;
      state.sourcesArticle = [];
      state.error = action.error.message;
    });
  },
});
export const { filterArticleNews } = articlesSlices.actions;
export default articlesSlices.reducer;
