import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ArticleData } from "./publisher";
export type ArticleState = {
  loading?: boolean;
  articles: ArticleData[];
  newsArticlesFiltered: ArticleData[];
  error?: string;
};
const defaultState: ArticleState = {
  loading: true,
  articles: [],
  newsArticlesFiltered: [],
  error: "",
};
const APIKEY = "e29300599c8f4278833919cec88eefec";
let uri = `https://news-proxy.netlify.app/api/top-headlines?country=us&apiKey=${APIKEY}`;
export const fetchArticles = createAsyncThunk("article/fetchArticles", () => {
  return fetch(uri)
    .then((res) => res.json())
    .then((data) => data.articles);
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
  },
});
export const { filterArticleNews } = articlesSlices.actions;
export default articlesSlices.reducer;
