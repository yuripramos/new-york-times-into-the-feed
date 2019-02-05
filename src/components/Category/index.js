import { connect } from "redux-zero/react";

import Category from "./Category";
import newsActions from "../../actions/News";

export default connect(
  ({ isFilled, FeedArray, filterByType, current }) => ({
    isFilled,
    FeedArray,
    filterByType,
    current
  }),
  newsActions
)(Category);
