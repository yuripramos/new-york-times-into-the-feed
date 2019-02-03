import CategoryArticleExpanded from "./CategoryArticleExpanded";
import { withRouter } from "react-router-dom";
import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";

import modalActions from "../../../actions/modal";
import newsActions from "../../../actions/News";

export default connect(
  ({ topUserStories, isFilled, FeedArray, current }) => ({
    topUserStories,
    isFilled,
    FeedArray,
    current
  }),
  combineActions(newsActions, modalActions)
)(withRouter(CategoryArticleExpanded));
