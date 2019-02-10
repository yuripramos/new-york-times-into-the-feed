import { connect } from "redux-zero/react";
import { withRouter } from "react-router-dom";

import Header from "./Header";
import newsActions from "../../actions/News";

export default connect(
  ({ topUserStories, isFilled, FeedArray }) => ({
    topUserStories,
    isFilled,
    FeedArray
  }),
  newsActions
)(withRouter(Header));
