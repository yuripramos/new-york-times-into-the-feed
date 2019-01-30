import React from "react";
import { string } from "prop-types";

/*ICONS*/
import ClearDay from "./ClearDay";
import Rain from "./Rain";
import ClearNight from "./ClearNight";
import Snow from "./Snow";
import Wind from "./Wind";
import Fog from "./Fog";
import Cloudy from "./Cloudy";
import PartlyCloudyDay from "./PartlyCloudyDay";
import PartlyCloudyNight from "./PartlyCloudyNight";
import Attention from "./Attention";
import Close from "./Close";

const IconGenerator = props => {
  switch (props.name) {
    case "clear-day":
      return <ClearDay {...props} />;
    case "clear-night":
      return <ClearNight {...props} />;
    case "rain":
      return <Rain {...props} />;
    case "snow":
      return <Snow {...props} />;
    case "wind":
      return <Wind {...props} />;
    case "fog":
      return <Fog {...props} />;
    case "cloudy":
      return <Cloudy {...props} />;
    case "partly-cloudy-day":
      return <PartlyCloudyDay {...props} />;
    case "partly-cloudy-night":
      return <PartlyCloudyNight {...props} />;
    case "attention":
      return <Attention {...props} />;
    case "close":
      return <Close {...props} />;
    default:
      return;
  }
};

IconGenerator.propTypes = {
  name: string
};

export default IconGenerator;
