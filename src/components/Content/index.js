import { connect } from "redux-zero/react";

import Content from "./Content";
import newsActions from "../../actions/News";

export default connect(
  ({ isFilled, FeedArray }) => ({
    isFilled,
    FeedArray,
  }),
  newsActions
)(Content);
