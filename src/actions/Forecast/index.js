import * as FORECAST_API from "../../services/Forecast";

export default () => ({
  forwardGeocode: async (state, city) => {
    const forwardGeoCodeRequest = await FORECAST_API.getForwardGeoCode(city);

    if (forwardGeoCodeRequest[1].status){
      return {
        isFilled: forwardGeoCodeRequest[1].status === 200,
        updatedCity: `${forwardGeoCodeRequest[0].components.city ||
          forwardGeoCodeRequest[0].components.state}, ${
          forwardGeoCodeRequest[0].components.country
        }`,
        citiesSearched: [...state.citiesSearched, state.search.city],
        longitude: forwardGeoCodeRequest[1].data.longitude,
        latitude: forwardGeoCodeRequest[1].data.latitude,
        nextWeekStats: forwardGeoCodeRequest[1].data.daily.data,
        currently: forwardGeoCodeRequest[1].data.currently,
        respForward: forwardGeoCodeRequest[1],
        unit: forwardGeoCodeRequest[1].data.flags.units
      };
    }
    return {
      isError: true,
    }
  },
  getForecastTimeMachine: async (state, latitude, longitute) => {
    const getForecastTimeMachineRequest = await FORECAST_API.getForecastTimeMachine(
      latitude,
      longitute
    );
    return {
      forecastTimeMachine: getForecastTimeMachineRequest,
      isTimeMachineActive: true
    };
  },
  handleUserInput: (state, e) => {
    const { value } = e.target;
    return {
      search: {
        ...state.search,
        city: value
      }
    };
  },
  clearError: () => {
    return {
      isError: false,
    };
  },
  clearSearch: () => {
    return {
      search: {},
      isTimeMachineActive: false,
    };
  },
  toggleForecast: state => {
    return {
      isTimeMachineActive: !state.isTimeMachineActive
    };
  }
});
