import React from "react";
import { Signature, ContentWrapper } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { translate } from "../../utils/i18n/i18n";
function Footer() {
  return (
    <ContentWrapper>
      <Container>
        <Row />
        <Row>
          <Column>
            <Signature>{translate("MADE_WITH_LOVE")}</Signature>
          </Column>
        </Row>
      </Container>
    </ContentWrapper>
  );
}

export default Footer;
