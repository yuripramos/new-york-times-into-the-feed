import React, { Component } from "react";

import { ContentWrapper, Title } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";
import { translate } from "../../utils/i18n";
class Forecast extends Component {
  render() {
    // const { isFilled } = this.props;
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <Title>
                forecast
                forecastforecastforecastforecastforecastforecastforecastforecastforecastforecastforecastforecast
              </Title>
            </Column>
          </Row>
        </Container>
      </ContentWrapper>
    );
  }
}

Forecast.defaultProps = {};

Forecast.propTypes = {};

export default Forecast;
