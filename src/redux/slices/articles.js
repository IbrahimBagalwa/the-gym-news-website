import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const defaultState = {
  loading: true,
  articles: [],
  error: "",
};
const APIKEY = "e29300599c8f4278833919cec88eefec";
let uri = `https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=${APIKEY}`;

export const fetchArticles = createAsyncThunk("article/fetchArticles", () => {
  return fetch(uri)
    .then((res) => res.json())
    .then((data) => data.articles);
});

export const articlesSlices = createSlice({
  name: "news",
  initialState: defaultState,
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload;
      state.error = "";
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.loading = false;
      state.articles = [];
      state.error = action.error.message;
    });
  },
});

export default articlesSlices.reducer;
