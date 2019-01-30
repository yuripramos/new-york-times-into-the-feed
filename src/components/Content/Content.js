import React from "react";
import { ContentWrapper, Title, SubTitle } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import Button from "../common/Button";

function Content() {
  return (
    <ContentWrapper>
      <Container>
        <Row>
          <Column>
            <Title>An title</Title>
            <SubTitle>subtitle</SubTitle>
            <Button to={"/forecast"} opacity={1} isCallToAction>
              start
            </Button>
          </Column>
        </Row>
      </Container>
    </ContentWrapper>
  );
}

export default Content;
