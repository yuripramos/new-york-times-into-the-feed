import React from "react";
import { string } from "prop-types";

/*ICONS*/
import Logo from "./Logo";

const IconGenerator = props => {
  switch (props.name) {
    case "Logo":
      return <Logo {...props} />;
    default:
      return;
  }
};

IconGenerator.propTypes = {
  name: string
};

export default IconGenerator;
