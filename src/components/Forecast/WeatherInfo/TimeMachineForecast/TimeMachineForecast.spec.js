import React from "react";
import { shallow } from "enzyme";


import TimeMachineForecast from "./TimeMachineForecast";

let props;

beforeEach(() => {
  props = {
    forecast: [
      {
        currently: {
          time: 214124,
          icon: "fog",
          temperature: 20
        }
      },
      {
        currently: {
          time: 123124,
          icon: "snow",
          temperature: -10
        }
      }
    ],
    isTimeMachineActive: true,
    clearSearch: jest.fn(),
    getForecastTimeMachine: jest.fn(),
    toggleForecast: jest.fn()
  };
});

describe("TimeMachineForecast Component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<TimeMachineForecast {...props} />)).toMatchSnapshot();
  });

});
