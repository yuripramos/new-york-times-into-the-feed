import { connect } from "redux-zero/react";
import { withRouter } from "react-router-dom";

import Header from "./Header";
import newsActions from "../../actions/News";

export default connect(
  ({
    topUserStories,
    scienceFeed,
    technologyFeed,
    healthFeed,
    politicsFeed,
    worldFeed
  }) => ({
    topUserStories,
    scienceFeed,
    technologyFeed,
    healthFeed,
    politicsFeed,
    worldFeed
  }),
  newsActions
)(withRouter(Header));
