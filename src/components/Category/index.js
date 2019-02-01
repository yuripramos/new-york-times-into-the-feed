import { connect } from "redux-zero/react";

import Category from "./Category";
import newsActions from "../../actions/News";

export default connect(
  ({
    isFilled,
    scienceFeed,
    technologyFeed,
    healthFeed,
    politicsFeed,
    worldFeed
  }) => ({
    isFilled,
    scienceFeed,
    technologyFeed,
    healthFeed,
    politicsFeed,
    worldFeed
  }),
  newsActions
)(Category);
