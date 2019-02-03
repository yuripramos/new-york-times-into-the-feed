import React, { Component } from "react";
import moment from "moment";
import { MODAL_TYPES } from "../../common/Modal/Modal";
import { hardRedirect } from "../../../utils/redirect";

import {
  ContentWrapper,
  Title,
  CategoryWrapper,
  PublishedDate,
  Author,
  Media,
  Kicker,
  Link,
  Description
} from "./styles";
import { Container, Row, Column } from "../../../styles/grid";
import { string, arrayOf, shape } from "prop-types";

class CategoryContentExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: false,
    }
    this.handleConfirmButton = this.handleConfirmButton.bind(this);
  }
  async handleConfirmButton(url) {
    const { openModal, closeModal } = this.props;
    openModal({
      title: "You are leaving this domain.",
      type: MODAL_TYPES.DEFAULT,
      icon: "Attention",
      description: ["We hope you enjoyed our project =)"],
      onClose: () => {
        hardRedirect(url);
        return closeModal()
      }
    });
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
    return (
      <ContentWrapper>
        {content && (
          <Container>
            <Row>
              <Column>
                <CategoryWrapper key={`article-${match.params.idArticle}`}>
                  <Title>{content.title} </Title>
                  {content.kicker && <Kicker>{content.kicker}</Kicker>}
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
                  <Description>
                    {content.abstract}
                  </Description>
                  <Author>{content.byline} </Author>
                  <Link onClick={() => this.handleConfirmButton(content.url)}>Original Link from NY Times</Link>
                </CategoryWrapper>
              </Column>
            </Row>
          </Container>
        )}
      </ContentWrapper>
    );
  }
}

CategoryContentExpanded.propTypes = {
  current: shape({
      results: arrayOf(
        shape({
          url: string,
          short_url:string,
        })
      )
    }),
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

export default CategoryContentExpanded;
