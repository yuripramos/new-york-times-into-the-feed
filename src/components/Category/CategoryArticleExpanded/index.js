import CategoryArticleExpanded from "./CategoryArticleExpanded";
import { withRouter } from "react-router-dom";
import { connect } from "redux-zero/react";

import newsActions from "../../../actions/News";

export default connect(
  ({
    topUserStories,
    isFilled,
    FeedArray,
    current
  }) => ({
    topUserStories,
    isFilled,
    FeedArray,
    current
  }),
  newsActions
)(withRouter(CategoryArticleExpanded));
