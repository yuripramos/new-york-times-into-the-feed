import React, { Component  } from "react";
import moment from "moment";
import Icon from "../../common/Icon";
import { Container, Row, Column } from "../../../styles/grid";
import { string, arrayOf, shape, bool } from "prop-types";

import {
  ContentWrapper,
  Title,
  CategoryWrapper,
  PublishedDate,
  Author,
  Media,
  Clicker,
  Notice,
  SubTitle
} from "./styles";

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
    const { content, match, isMainPage } = this.props;
    return (
      <ContentWrapper>
        <Container>
          <Row>
            <Column>
              {isMainPage && (
                <Notice>
                  <Icon name="Attention" width="50px" height="50px" />
                  This page only list the most recent news from all
                  sections, to navigate choose the sections above
                </Notice>
              )}
              {content.map((e, i) => (
                <CategoryWrapper key={`article-${e.section}-${i}`}>
                  {isMainPage && <SubTitle>in {e.section} </SubTitle>}
                  {isMainPage ? <Title>{e.title} </Title> : (
                    <Clicker
                      to={`${match.path}/${this.getKeyFromShortenUrl(
                        e.short_url || e.url
                      )}`}
                    >
                      <Title>{e.title} </Title>
                    </Clicker>
                  )}
                  <PublishedDate>
                    updated in: {moment(e.published_date).format("LLL")}
                  </PublishedDate>
                  {e.multimedia.length > 0 && (
                    <Media
                      src={
                        e.multimedia.length > 4
                          ? e.multimedia[4].url
                          : e.multimedia[2].url
                      }
                      alt="thumbnail"
                    />
                  )}
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
CategoryContent.defaultProps = {};

CategoryContent.propTypes = {
  content: arrayOf(
    shape({
      section: string,
      abstract: string,
      url: string,
      published_date: string,
      byline: string,
      title: string
    })
  ),
  match:
    shape({
      path: string,
    }),
  isMainPage: bool,
};

export default CategoryContent;
