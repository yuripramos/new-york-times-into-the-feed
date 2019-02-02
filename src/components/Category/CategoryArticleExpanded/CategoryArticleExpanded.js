import React, { Component } from "react";
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

class CategoryContentExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: false,
    }
  }

  componentDidMount() {
    const { current, match } = this.props;
    if(current.status) {
      this.setState({
        content: current.results.find(
          e => {
            if (e.short_url) {
              return e.short_url.includes(match.params.idArticle);
            }
            return e.url.includes(match.params.idArticle);
          }
        ),
      })
    }
  }

  render() {
    const { match } = this.props;
    const { content } = this.state;
    console.log("content", content);
    return (
      <ContentWrapper>
        {content && (
          <Container>
            <Row>
              <Column>
                <CategoryWrapper key={`article-${match.params.idArticle}`}>
                  <Title>{content.title} </Title>
                  <PublishedDate>
                    updated in:{" "}
                    {moment(content.published_date).format("LLL")}
                  </PublishedDate>
                  <Media
                    src={
                      content.multimedia[4].url || content.multimedia[2].url
                    }
                    alt="thumbnail"
                  />
                  <Author>{content.byline} </Author>
                </CategoryWrapper>
              </Column>
            </Row>
          </Container>
        )}
      </ContentWrapper>
    );
  }
}


CategoryContentExpanded.defaultProps = {};

CategoryContentExpanded.propTypes = {};

export default CategoryContentExpanded;
