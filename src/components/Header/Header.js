import React, { Component } from "react";
import { shape, func } from "prop-types";
import { black } from "../../styles/settings";
import Icon from "../common/Icon";
import { Container, Row, Column } from "../../styles/grid";
import SidebarMenu from "../common/SidebarMenu";

import { HeaderWrapper, TitleWrapper } from "./styles";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  async componentDidMount() {
    this.props.topUserStories([
      "science",
      "technology",
      "health",
      "politics",
      "world"
    ]);
  }

  render() {
    const {
      history,
    } = this.props;

    return (
      <HeaderWrapper>
        <Container>
          <Row>
            <Column>
              <TitleWrapper>
                <Icon name="Logo" color={black} width="490px" height="56px" />
              </TitleWrapper>
            </Column>
          </Row>
          <Row>
            <Column>
              <SidebarMenu currentLocation={history.location.pathname} />
            </Column>
          </Row>
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;


Header.propTypes = {
  topUserStories: func,
  history: shape({
    push: func
  })
};
