import React, { Component } from "react";

import { ContentWrapper, Title } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";
import { translate } from "../../utils/i18n";

class Category extends Component {
  async componentDidMount() {
    const {
      history,
      scienceFeed,
      technologyFeed,
      healthFeed,
      politicsFeed,
      worldFeed
    } = this.props;
    console.log("category science content", scienceFeed);
  }
  render() {
    const { isFilled } = this.props;
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

Category.defaultProps = {};

Category.propTypes = {};

export default Category;
