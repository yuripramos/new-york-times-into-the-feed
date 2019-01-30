import React, { Component } from "react";
import moment from "moment";
import { arrayOf, shape, number, string, bool, func } from "prop-types";

import IconGenerator from "../../../common/Icon";
import { translate } from "../../../../utils/i18n";
import {
  ContentWrapper,
  Temperature,
  TinySpecs,
  Icon,
  DaySpecs
} from "../FutureForecast/styles";
import { InnerWrapper } from "./styles";
import { Container, Row, Column } from "../../../../styles/grid";

class FutureForecast extends Component {
  componentDidUpdate(prevProps) {
    const { isTimeMachineActive, clearSearch } = this.props;
    if (isTimeMachineActive !== prevProps.isTimeMachineActive) {
      clearSearch();
    }
  }
  render() {
    const { forecast } = this.props;
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <InnerWrapper>
                {forecast.map((e, i) => (
                  <DaySpecs key={i} tiny>
                    <TinySpecs tiny>
                      {moment.unix(e.currently.time).format("L")}
                    </TinySpecs>
                    <Icon>
                      <IconGenerator
                        name={e.currently.icon}
                        width={"50px"}
                        height={"50px"}
                      />
                    </Icon>
                    <Temperature tiny>
                      {`${e.currently.temperature} ${translate("TEMPERATURE")}`}{" "}
                    </Temperature>
                  </DaySpecs>
                ))}
              </InnerWrapper>
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
      temperature: number
    })
  ),
  isTimeMachineActive: bool,
  clearSearch: func,
};

export default FutureForecast;
