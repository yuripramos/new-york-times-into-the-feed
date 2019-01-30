import React from "react";
import { shallow } from "enzyme";

import FutureForecast from "./FutureForecast";

let props;

beforeEach(() => {
  props = {
    forecast: [
      {
        temperatureHigh: 35,
        temperatureLow: 18,
        time: 2312321,
        icon: "clear-night"
      },
      {
        temperatureHigh: 25,
        temperatureLow: 8,
        time: 2314441,
        icon: "clear-day"
      },
      {
        temperatureHigh: 25,
        temperatureLow: 8,
        time: 231111141,
        icon: "clear-day"
      }
    ]
  };
});


describe("FutureForecast Component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<FutureForecast {...props} />)).toMatchSnapshot();
  });
});
