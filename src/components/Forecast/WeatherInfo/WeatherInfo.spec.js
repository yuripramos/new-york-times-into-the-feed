import React from "react";
import { shallow } from "enzyme";

import WeatherInfo from "./WeatherInfo";
import Button from "../../common/Button";
import { spy } from "sinon";
let props;

beforeEach(() => {
  props = {
    city: "one city",
    temperature: 33,
    day: "21 January, 2019",
    wind: 3,
    humidity: 23,
    icon: "clear-day",
    summary: "Amazing day, go to the beach",
    apparentTemperature: 30,
    nextWeek: [
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
    ],
    isTimeMachine: false,
    forecastTimeMachine: [
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
    ]


  };
});

describe("FutureForecast Component", () => {
  it("should match snapshot with props", () => {
    expect(shallow(<WeatherInfo {...props} />)).toMatchSnapshot();
  });
  it("should call toggleforecast when timeMachine is active", () => {
    spy(WeatherInfo.prototype, "handleConfirmButton");

    const wrapper = shallow(<WeatherInfo {...props} />);
    wrapper.find(Button).simulate("click");
    wrapper.setProps({ isTimeMachineActive: true });
    wrapper.update();
    expect(WeatherInfo.prototype.handleConfirmButton.calledOnce);

    WeatherInfo.prototype.handleConfirmButton.restore();
  });
});
