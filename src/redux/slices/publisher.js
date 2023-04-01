import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const defaultState = {
  loading: true,
  sourcesArticle: [],
  error: "",
};

export const fetchSources = createAsyncThunk("sources/fetchSources", () => {
  return fetch(
    "https://newsapi.org/v2/top-headlines/sources?q=keyword&apiKey=e29300599c8f4278833919cec88eefec"
  )
    .then((res) => res.json())
    .then((data) => data.sources);
});
export const publisherSlices = createSlice({
  name: "publushers",
  initialState: defaultState,
  extraReducers: (builder) => {
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

export default publisherSlices.reducer;
