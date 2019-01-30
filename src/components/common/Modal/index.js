import { connect } from "redux-zero/react";

import Modal from "./Modal";
import actions from "../../../actions/modal";

export default connect(({ modalSettings }) => ({ modalSettings }), actions)(
  Modal
);
