import { connect } from "redux-zero/react";
import { combineActions } from "redux-zero/utils";

import Header from "./Header";
import Forecastactions from "../../actions/Forecast";
import modalActions from "../../actions/modal";

export default connect(
  ({
    handleUserInput,
    search,
    clearSearch,
    isLoading,
    isError,
    clearError
  }) => ({
    handleUserInput,
    search,
    clearSearch,
    isLoading,
    isError,
    clearError
  }),
  combineActions(Forecastactions, modalActions)
)(Header);
