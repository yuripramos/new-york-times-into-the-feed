import React from "react";
import moment from "moment";
import {
  ContentWrapper,
  Title,
  CategoryWrapper,
  PublishedDate,
  Author,
  Media
} from "./styles";
import { Container, Row, Column } from "../../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";

function CategoryContent ({ content }) {
  return (
    <ContentWrapper>
      <Container>
        <Row>
          <Column>
            {content.map((e, i) => (
              <CategoryWrapper key={`article-${e.section}-${i}`}>
                <Title>{e.title} </Title>
                <PublishedDate>
                  updated in: {moment(e.published_date).format("LLL")}
                </PublishedDate>
                <Media
                  src={e.multimedia[4].url || e.multimedia[2].url}
                  alt="thumbnail"
                  />
                <Author>{e.byline} </Author>
              </CategoryWrapper>
            ))}
          </Column>
        </Row>
      </Container>
    </ContentWrapper>
  );
}


CategoryContent.defaultProps = {};

CategoryContent.propTypes = {

};

export default CategoryContent;
