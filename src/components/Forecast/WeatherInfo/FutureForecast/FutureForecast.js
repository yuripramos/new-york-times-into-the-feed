import React, { Component } from "react";
import { arrayOf, shape, number, string } from "prop-types";
import moment from "moment";

import IconGenerator from "../../../common/Icon";
import { translate } from "../../../../utils/i18n";
import {
  ContentWrapper,
  Temperature,
  TinySpecs,
  Icon,
  DaySpecs,
  InnerContentWrapper
} from "./styles";
import { Container, Row, Column } from "../../../../styles/grid";

class FutureForecast extends Component {
  render() {
    const { forecast } = this.props;

    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <InnerContentWrapper>
                {forecast
                  .filter((j, k) => k > 0)
                  .map((e, i) => (
                    <DaySpecs key={i}>
                      <TinySpecs>
                        {moment.unix(e.time).format("dddd")}
                      </TinySpecs>
                      <Icon>
                        <IconGenerator
                          name={e.icon}
                          width={"70px"}
                          height={"70px"}
                        />
                      </Icon>
                      <Temperature>
                        {`${e.temperatureHigh} ${translate("TEMPERATURE")}`}{" "}
                      </Temperature>
                      <Temperature tiny>
                        {`${e.temperatureLow} ${translate("TEMPERATURE")}`}{" "}
                      </Temperature>
                    </DaySpecs>
                  ))}
              </InnerContentWrapper>
            </Column>
          </Row>
        </Container>
      </ContentWrapper>
    );
  }
}

FutureForecast.defaultProps = {};

FutureForecast.propTypes = {
  forecast: arrayOf(
    shape({
      time: number,
      icon: string,
      temperatureHigh: number,
      temperatureLow: number,
    })),
};

export default FutureForecast;
