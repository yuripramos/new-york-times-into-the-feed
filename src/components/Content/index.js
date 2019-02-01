import { connect } from "redux-zero/react";
import { withRouter } from "react-router-dom";
import Content from "./Content";
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
)(Content);
