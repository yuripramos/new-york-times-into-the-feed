import React, { Component  } from "react";
import moment from "moment";

import {
  ContentWrapper,
  Title,
  CategoryWrapper,
  PublishedDate,
  Author,
  Media,
  Clicker
} from "./styles";
import { Container, Row, Column } from "../../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";

class CategoryContent extends Component {
  constructor(props) {
    super(props);
    this.getKeyFromShortenUrl = this.getKeyFromShortenUrl.bind(this);
  }
  getKeyFromShortenUrl(hash) {
    const hashIdFull = hash.split("/");
    const shortHash = hashIdFull[hashIdFull.length - 1];
    if(shortHash.includes(".html")) {
      return shortHash.replace(".html", "");
    }
    return shortHash;
  }

  render() {
    const { content, match } = this.props;
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              {content.map((e, i) => (
                <CategoryWrapper key={`article-${e.section}-${i}`}>
                  <Clicker
                    to={`${match.path}/${this.getKeyFromShortenUrl(
                      e.short_url || e.url
                    )}`}
                  >
                    <Title>{e.title} </Title>
                  </Clicker>
                  <PublishedDate>
                    updated in: {moment(e.published_date).format("LLL")}
                  </PublishedDate>
                  {e.multimedia.length > 0 && (
                    <Media
                      src={e.multimedia.length >3 ? e.multimedia[4].url : e.multimedia[2].url}
                      alt="thumbnail"
                    />
                  )
                  }
                  <Author>{e.byline} </Author>
                </CategoryWrapper>
              ))}
            </Column>
          </Row>
        </Container>
      </ContentWrapper>
    );
  }
}


CategoryContent.propTypes = {
  content: arrayOf(
    shape({
      title: string,
      published_date: string,
      byline: string
    })
  ),
  match:
    shape({
      path: string,
    }),
};

export default CategoryContent;
