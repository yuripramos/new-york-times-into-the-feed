import React, { Component } from "react";
import { ContentWrapper, Title, SubTitle } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import Button from "../common/Button";

class Content extends Component {
  async componentDidMount() {
    const {
      history,
      scienceFeed,
      technologyFeed,
      healthFeed,
      politicsFeed,
      worldFeed
    } = this.props;
  }
  render() {
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              <Title> Content Content Content Content Content</Title>
              <SubTitle>subtitle Content Content Content</SubTitle>
              <Button to={"/forecast"} opacity={1} isCallToAction>
                start
              </Button>
            </Column>
          </Row>
        </Container>
      </ContentWrapper>
    );
  }
}

export default Content;
