import actions from "./index";

jest.mock("../../services/Forecast.js");


const { getForwardGeoCode: getForwardGeoCodeAPI,
  getForecastTimeMachine: getForecastTimeMachineAPI } = require("../../services/Forecast.js");

const getForwardGeoCodeAPIResponse = [
  {
    components: {
      city: "New York",
      country: "USA"
    }
  },
  {
    status: 200,
    data: {
      longitute: -1234.0,
      latitude: 521521,
      daily: {
        data: [
          {
            temperatureHigh: 35,
            temperatureLow: 18,
            time: 2312321
          },
          {
            temperatureHigh: 25,
            temperatureLow: 8,
            time: 2314441
          }
        ]
      },
      currently: {
        apparentTemperature: 29,
        time: 232121,
        windSpeed: 2,
        icon: "clear-day",
        summary: "perfect day to code =)"
      },
      flags: {
        units: "SI"
      }
    }
  }
];

const getForecastTimeMachineAPIResponse = [
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
      icon: "fog",
      temperature: 10
    }
  }
]


describe("Forecast actions", () => {
  it("should return an action object", () => {
    expect(typeof actions() === "object").toBeTruthy();
    expect(
      Object.keys(actions())).toEqual([
        "forwardGeocode",
        "getForecastTimeMachine",
        "handleUserInput",
        "clearError",
        "clearSearch",
        "toggleForecast"
      ]);
  })

  describe("forwardGeoCode", () => {
    it("Should forwardGeoCode with success", async () => {
      getForwardGeoCodeAPI.mockImplementation(() =>
        Promise.resolve(getForwardGeoCodeAPIResponse)
      );
      const { forwardGeocode } = actions();

      const state = {
        citiesSearched: ["Los Angeles"],
        search: {
          city: "New York, USA"
        }
      };

      const response = await forwardGeocode(state, "New York, USA");

      expect(Object.keys(response)).toHaveLength(9);
    })
    it("Should forwardGeoCode with errors", async () => {
      getForwardGeoCodeAPI.mockImplementation(() =>
        Promise.resolve([{ empty: ""}, {empty: "" }])
      );
      const { forwardGeocode } = actions();

      const state = {
        citiesSearched: ["Los Angeles"],
        search: {
          city: "New York, USA"
        }
      };

      const response = await forwardGeocode(state, "New York, USA");

      expect(Object.keys(response)).toHaveLength(1);
    })
  })

  describe("getForecastTimeMachine", () => {
    it("Should getForecastTimeMachine with success", async () => {
      getForecastTimeMachineAPI.mockImplementation(() =>
        Promise.resolve(getForecastTimeMachineAPIResponse)
      );
      const { getForecastTimeMachine } = actions();

      const state = {
        citiesSearched: ["Los Angeles"],
        search: {
          city: "New York, USA"
        }
      };

      const response = await getForecastTimeMachine(
        state,
        123213,
        -23222
      );

      expect(Object.keys(response)).toHaveLength(2);
    });
  });

  describe("clearSearch", () => {
    it("Should clearSearch with success", async () => {
      const { clearSearch } = actions();
      const state = clearSearch();

      expect(state).toEqual({
        search: {},
        isTimeMachineActive: false,
      });
    });
  });

  describe("clearError", () => {
    it("Should clearError with success", async () => {
      const { clearError } = actions();
      const state = clearError();

      expect(state).toEqual({
        isError: false
      });
    });
  });
  describe("handleUserInput", () => {
    it("Should return the updated state search obj", () => {
      const { handleUserInput } = actions();

      const inputEvent = {
        target: {
          name: "city",
          value: "Rio de Janeiro",
          error: null
        }
      };

      expect(handleUserInput({}, inputEvent)).toEqual({
        search: {
          city: "Rio de Janeiro"
        }
      });
    });
  });
  describe("toggleForecast", () => {
    it("Should return the updated state isTimeMachineActive", () => {
      const { toggleForecast } = actions();

      const state = {
        isTimeMachineActive: false,
      };

      expect(toggleForecast(state)).toEqual({ isTimeMachineActive: true });
    });
  });
});
