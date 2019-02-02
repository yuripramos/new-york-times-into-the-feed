import React, { Component } from "react";

import CategoryArticle from "./CategoryArticle";
import { ContentWrapper, Title } from "./styles";
import { Container, Row, Column } from "../../styles/grid";
import { string, arrayOf, shape, number, func, bool } from "prop-types";
import { translate } from "../../utils/i18n";
import LocalLoading from "../common/LocalLoading";
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentWillReceiveProps(){
    const { isFilled, current } = this.props;
    const { isLoading } = this.state;
    if (isFilled && isLoading) {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    const { isFilled, contextTitle, FeedArray, current } = this.props;
    const { isLoading } = this.state;
    isFilled && this.props.filterByType(FeedArray, contextTitle);
    console.log(current);
    return (
      <ContentWrapper>
        {isFilled && (
          <Container>
            <Row>
              <Column>
                <Title>
                  {isLoading ? ( <LocalLoading /> ) : (
                    <CategoryArticle  content={current.results.slice(0, 6)} />
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

Category.defaultProps = {};

Category.propTypes = {
  filterByType: func,
  contextTitle: string,
  isFilled: bool,
};

export default Category;
