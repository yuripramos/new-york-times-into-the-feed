import React, { Component } from "react";
import { shape, func, string, bool } from "prop-types";
import { black } from "../../styles/settings";
import { HeaderWrapper, Title, TitleWrapper } from "./styles";
import Icon from "../common/Icon";
import { Container, Row, Column } from "../../styles/grid";
import SidebarMenu from "../common/SidebarMenu";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  async componentDidMount() {
    const { topUserStories } = this.props;
    this.props.topUserStories([
      "science",
      "technology",
      "health",
      "politics",
      "world"
    ]);
  }

  render() {
    const { section, history } = this.props;
    const { isLoading } = this.state;
    return (
      <HeaderWrapper>
        <Container>
          <Row>
            <Column>
              <TitleWrapper>
                {/* <Title>The Newest York Times</Title> */}
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

Header.defaultProps = {};

Header.propTypes = {
  topUserStories: func,
  history: shape({
    push: func
  })
};
