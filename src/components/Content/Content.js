import React, { Component } from "react";

import CategoryArticle from "../Category/CategoryArticle";
import { ContentWrapper, Title } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { arrayOf, func, bool } from "prop-types";
import LocalLoading from "../common/LocalLoading";
import { shuffleArticles } from "../../utils/formatArray";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
    this._isMounted = false;
  }
  componentWillReceiveProps() {
    const { isLoading } = this.state;
    if (isLoading) {
      this.setState({
        isLoading: false
      });
    }
  }

  componentDidMount() {
    this._isMounted = true;
    window.onpopstate = () => {
      if (this._isMounted) {
        this.setState({
          isLoading: false
        });
      }
    };
  }

  render() {
    const {
      isFilled,
      FeedArray,
    } = this.props;
    const { isLoading } = this.state;
    return (
      <ContentWrapper>
        {isFilled && (
          <Container>
            <Row>
              <Column>
                <Title>
                  {isLoading ? (
                    <LocalLoading />
                  ) : (
                    <CategoryArticle
                      content={shuffleArticles(FeedArray)}
                      isMainPage
                    />
                  )}
                </Title>
              </Column>
            </Row>
          </Container>
        )}
      </ContentWrapper>
    );
  }
}

Content.defaultProps = {};

Content.propTypes = {
  filterByType: func,
  isFilled: bool,
  // FeedArray: arrayOf,
};

export default Content;
