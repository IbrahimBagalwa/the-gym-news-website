import articleReducer from "./articles";
import publisherReducer from "./publisher";

const slicesReducer = {
  news: articleReducer,
  publushers: publisherReducer,
};
export default slicesReducer;
