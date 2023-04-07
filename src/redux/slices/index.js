import articleReducer from "./articles";
import publisherReducer from "./publisher";

const slicesReducer = {
  news: articleReducer,
  publishers: publisherReducer,
};
export default slicesReducer;
