import React from "react";
import { string } from "prop-types";

/*ICONS*/
import Logo from "./Logo";
import Attention from "./Attention";
import Close from "./Close";
import FlagUSA from "./FlagUSA";
import FlagSpain from "./FlagSpain";

const IconGenerator = props => {
  switch (props.name) {
    case "Logo":
      return <Logo {...props} />;
    case "Attention":
      return <Attention {...props} />;
    case "Close":
      return <Close {...props} />;
    case "FlagUSA":
      return <FlagUSA {...props} />;
    case "FlagSpain":
      return <FlagSpain {...props} />;
    default:
      return;
  }
};

IconGenerator.propTypes = {
  name: string
};

export default IconGenerator;
