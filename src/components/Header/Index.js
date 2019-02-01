import { connect } from "redux-zero/react";

import Header from "./Header";
import newsActions from "../../actions/News";

export default connect(
  ({ topUserStories, section }) => ({
    topUserStories,
    section
  }),
  newsActions
)(Header);
