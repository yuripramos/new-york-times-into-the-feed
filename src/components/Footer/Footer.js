import React from "react";
import { Signature, ContentWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";

function Footer() {
  return (
    <ContentWrapper>
      <Container>
        <Row />
        <Row>
          <Column>
            <Signature>made with 💛 by Yuri Ramos</Signature>
          </Column>
        </Row>
      </Container>
    </ContentWrapper>
  );
}

export default Footer;
