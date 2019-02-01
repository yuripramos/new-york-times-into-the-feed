import React, { Component } from "react";

import { ContentWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";
import { translate } from "../../utils/i18n";
class Forecast extends Component {
  render() {
    const { forecastTimeMachine, isFilled } = this.props;
    return (
      <ContentWrapper>
        {isFilled && (
          <Container>
            <Row>
              <Column>
                {/* <WeatherInfo
                  city={updatedCity}
                  temperature={`${currently.temperature}${translate(
                    "TEMPERATURE"
                  )}`}
                  apparentTemperature={`${
                    currently.apparentTemperature
                  }${translate("TEMPERATURE")}`}
                  day={moment.unix(currently.time).format("lll")}
                  wind={`${currently.windSpeed} ${translate("WIND_SPEED")}`}
                  humidity={formatHumidity(currently.humidity)}
                  icon={currently.icon}
                  summary={currently.summary}
                  nextWeek={nextWeekStats}
                  getForecastTimeMachine={getForecastTimeMachine}
                  latitude={latitude}
                  longitude={longitude}
                  isTimeMachineActive={isTimeMachineActive}
                  forecastTimeMachine={forecastTimeMachine}
                  toggleForecast={toggleForecast}
                  clearSearch={clearSearch}
                /> */}
              </Column>
            </Row>
          </Container>
        )}
      </ContentWrapper>
    );
  }
}

Forecast.defaultProps = {
  forecastTimeMachine: null,
  search: null,
  updatedCity: "",
  isFilled: false,
  citiesSearched: [],
  nextWeekStats: null,
  latitude: null,
  longitude: null,
  currently: null,
  isTimeMachineActive: false
};

Forecast.propTypes = {
  getForecast: func,
  clearSearch: func,
  getForecastTimeMachine: func,
  search: shape({
    city: string
  }),
  updatedCity: string,
  isFilled: bool,
  citiesSearched: arrayOf(string),
  nextWeekStats: arrayOf(
    shape({
      time: number,
      icon: string
    })
  ),
  forecastTimeMachine: arrayOf(
    shape({
      time: number,
      icon: string,
      summary: string
    })
  ),
  latitude: number,
  longitude: number,
  currently: shape({
    temperature: number,
    apparentTemperature: number,
    windSpeed: number,
    humidity: number,
    icon: string,
    summary: string
  }),
  unit: string,
  isTimeMachineActive: bool,
  toggleForecast: func
};

export default Forecast;
